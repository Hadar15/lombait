import { NextResponse } from 'next/server';
import { getCompetitionsFromSheet } from '@/lib/google-sheets';

export async function GET(request: Request) {
  try {
    console.log('🚀 API Route: /api/competitions called');
    console.log('⏰ Timestamp:', new Date().toISOString());
    
    // Check if environment variables are set
    const hasGoogleSheetsConfig = process.env.GOOGLE_SHEETS_CLIENT_EMAIL && 
                                 process.env.GOOGLE_SHEETS_PRIVATE_KEY && 
                                 process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

    if (!hasGoogleSheetsConfig) {
      console.log('❌ Google Sheets not configured');
      return NextResponse.json(
        { error: 'Google Sheets not configured. Please set up environment variables.' },
        { status: 500 }
      );
    }

    // Fetch from Google Sheets
    console.log('🔍 Fetching competitions from Google Sheets...');
    const competitions = await getCompetitionsFromSheet();
    
    console.log('✅ Returning', competitions.length, 'competitions from Google Sheets');
    console.log('📊 Competition IDs:', competitions.map(c => c.id));
    
    // Force no cache for production
    const response = NextResponse.json({ 
      competitions,
      timestamp: new Date().toISOString(),
      cache: 'disabled'
    });
    
    // Aggressive cache busting for Vercel
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
    response.headers.set('Surrogate-Control', 'no-store');
    response.headers.set('X-Cache-Status', 'MISS');
    
    return response;
    
  } catch (error) {
    console.error('❌ Error in /api/competitions:', error);
    console.error('🔍 Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    });
    
    return NextResponse.json(
      { 
        error: 'Failed to fetch competitions from Google Sheets',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 