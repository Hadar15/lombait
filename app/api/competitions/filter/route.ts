import { NextResponse } from 'next/server';
import { getFilteredCompetitions, Competition } from '@/lib/google-sheets';

export async function GET() {
  try {
    console.log('🚀 API Route: /api/competitions/filter called');
    
    // Check if environment variables are set
    const hasGoogleSheetsConfig = process.env.GOOGLE_SHEETS_CLIENT_EMAIL && 
                                 process.env.GOOGLE_SHEETS_PRIVATE_KEY && 
                                 process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

    if (!hasGoogleSheetsConfig) {
      console.log('⚠️ Google Sheets not configured, returning empty array');
      return NextResponse.json({ competitions: [] });
    }

    // For now, return all competitions without filtering
    // Filtering can be implemented later if needed
    console.log('🔍 Fetching all competitions from Google Sheets');
    const competitions: Competition[] = await getFilteredCompetitions({
      category: undefined,
      status: undefined,
      search: undefined,
    });

    console.log('✅ Returning', competitions.length, 'competitions');
    return NextResponse.json({ competitions });
    
  } catch (error) {
    console.error('❌ Error in /api/competitions/filter:', error);
    return NextResponse.json({ 
      competitions: [],
      error: 'Failed to fetch competitions'
    });
  }
} 