import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function GET() {
  try {
    console.log('🧪 Debug Google Sheets - Starting...');
    
    // Check environment variables
    const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY;
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
    
    console.log('🔍 Environment variables check:');
    console.log('- Client Email:', clientEmail ? '✅ Set' : '❌ Not set');
    console.log('- Private Key:', privateKey ? '✅ Set' : '❌ Not set');
    console.log('- Spreadsheet ID:', spreadsheetId ? '✅ Set' : '❌ Not set');
    
    if (!clientEmail || !privateKey || !spreadsheetId) {
      return NextResponse.json({
        success: false,
        error: 'Missing environment variables',
        details: {
          clientEmail: !!clientEmail,
          privateKey: !!privateKey,
          spreadsheetId: !!spreadsheetId
        }
      });
    }
    
    // Fix private key format
    let formattedPrivateKey = privateKey;
    if (formattedPrivateKey) {
      formattedPrivateKey = formattedPrivateKey.replace(/^["']|["']$/g, '');
      formattedPrivateKey = formattedPrivateKey.replace(/\\n/g, '\n');
    }
    
    // Test authentication
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: formattedPrivateKey,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });
    
    console.log('🔐 Testing authentication...');
    const authClient = await auth.getClient();
    console.log('✅ Authentication successful');
    
    // Test API access
    const sheets = google.sheets({ version: 'v4', auth });
    
    console.log('📊 Testing spreadsheet access...');
    const response = await sheets.spreadsheets.get({
      spreadsheetId,
    });
    
    console.log('✅ Spreadsheet access successful');
    console.log('📋 Spreadsheet title:', response.data.properties?.title);
    
    // Get all available sheets
    const sheetNames = response.data.sheets?.map(sheet => sheet.properties?.title);
    console.log('📋 Available sheets:', sheetNames);
    
    // Test different ranges
    const ranges = [
      'Competitions!A2:O',
      'Competitions!A2:N', 
      'Competitions!A:O',
      'Competitions!A:N'
    ];
    
    const results: any = {};
    
    for (const range of ranges) {
      try {
        console.log(`🔍 Testing range: ${range}`);
        const dataResponse = await sheets.spreadsheets.values.get({
          spreadsheetId,
          range,
        });
        
        const rows = dataResponse.data.values;
        console.log(`📈 Rows found with range ${range}:`, rows ? rows.length : 0);
        
        results[range] = {
          rowCount: rows ? rows.length : 0,
          data: rows ? rows.slice(0, 3) : [] // Only show first 3 rows for debugging
        };
        
      } catch (error) {
        console.log(`❌ Range ${range} failed:`, error);
        results[range] = {
          error: error instanceof Error ? error.message : 'Unknown error'
        };
      }
    }
    
    return NextResponse.json({
      success: true,
      spreadsheet: {
        title: response.data.properties?.title,
        sheets: sheetNames,
        results
      },
      environment: {
        clientEmail: !!clientEmail,
        privateKey: !!privateKey,
        spreadsheetId: !!spreadsheetId
      }
    });
    
  } catch (error) {
    console.error('❌ Debug failed:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      details: {
        message: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined
      }
    });
  }
} 