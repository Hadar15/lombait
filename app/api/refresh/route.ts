import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { getCompetitionsFromSheet } from '@/lib/google-sheets';

// Force dynamic rendering
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    console.log('🔄 Manual refresh triggered...');
    
    // Fetch fresh data from Google Sheets
    const competitions = await getCompetitionsFromSheet();
    console.log(`✅ Fetched ${competitions.length} competitions from Google Sheets`);

    // Revalidate all important paths
    revalidatePath('/');
    revalidatePath('/competitions');
    revalidatePath('/api/competitions');
    
    console.log('✅ All paths revalidated successfully');
    
    return NextResponse.json({
      success: true,
      competitionsCount: competitions.length,
      timestamp: new Date().toISOString(),
      message: 'Data refreshed successfully'
    });
    
  } catch (error) {
    console.error('❌ Refresh error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to refresh data',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function POST() {
  return GET();
} 