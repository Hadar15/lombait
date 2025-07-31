import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function GET() {
  try {
    console.log('🧪 Testing Google Sheets connection...');
    
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
    
    // Test authentication
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey.replace(/\\n/g, '\n'),
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
    
    // Test data reading
    console.log('📖 Testing data reading...');
    const dataResponse = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'Competitions!A2:N',
    });
    
    const rows = dataResponse.data.values;
    console.log('✅ Data reading successful');
    console.log('📈 Rows found:', rows ? rows.length : 0);
    
    if (rows && rows.length > 0) {
      console.log('📝 First row data:', rows[0]);
    }
    
    return NextResponse.json({
      success: true,
      spreadsheet: {
        title: response.data.properties?.title,
        sheets: response.data.sheets?.map(sheet => sheet.properties?.title),
        dataRows: rows ? rows.length : 0,
        sampleData: rows && rows.length > 0 ? rows[0] : null
      },
      environment: {
        clientEmail: !!clientEmail,
        privateKey: !!privateKey,
        spreadsheetId: !!spreadsheetId
      }
    });
    
  } catch (error) {
    console.error('❌ Test failed:', error);
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