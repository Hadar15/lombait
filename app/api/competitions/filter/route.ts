import { NextResponse } from 'next/server';
import { getFilteredCompetitions } from '@/lib/google-sheets';

export async function GET(request: Request) {
  try {
    console.log('🚀 API Route: /api/competitions/filter called');
    
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const status = searchParams.get('status');
    const search = searchParams.get('search');

    console.log('🔍 Query parameters:', { category, status, search });

    // Check if environment variables are set
    const hasGoogleSheetsConfig = process.env.GOOGLE_SHEETS_CLIENT_EMAIL && 
                                 process.env.GOOGLE_SHEETS_PRIVATE_KEY && 
                                 process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

    if (!hasGoogleSheetsConfig) {
      console.log('⚠️ Google Sheets not configured, returning empty array');
      return NextResponse.json({ competitions: [] });
    }

    // Try to fetch filtered competitions from Google Sheets
    let competitions;
    try {
      console.log('🔍 Fetching filtered competitions from Google Sheets');
      competitions = await getFilteredCompetitions({
        category: category || undefined,
        status: status || undefined,
        search: search || undefined,
      });
      
    } catch (sheetsError) {
      console.error('❌ Google Sheets error:', sheetsError);
      console.log('⚠️ Returning empty array due to Google Sheets error');
      competitions = [];
    }

    console.log('✅ Returning', competitions.length, 'filtered competitions');
    return NextResponse.json({ competitions });
    
  } catch (error) {
    console.error('❌ Error in /api/competitions/filter:', error);
    return NextResponse.json({ 
      competitions: [],
      error: 'Failed to fetch filtered competitions'
    });
  }
} 