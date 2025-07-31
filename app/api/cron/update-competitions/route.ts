import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { getCompetitionsFromSheet } from '@/lib/google-sheets';

export async function GET(request: Request) {
  try {
    // Verify cron secret
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    console.log('🕐 Cron job triggered - updating competitions data...');
    
    // Fetch fresh data from Google Sheets
    const competitions = await getCompetitionsFromSheet();
    console.log(`✅ Fetched ${competitions.length} competitions from Google Sheets`);

    // Revalidate pages
    revalidatePath('/');
    revalidatePath('/competitions');
    revalidatePath('/api/competitions');
    
    console.log('✅ Pages revalidated successfully');
    
    return NextResponse.json({
      success: true,
      competitionsCount: competitions.length,
      timestamp: new Date().toISOString(),
      message: 'Competitions data updated successfully'
    });
    
  } catch (error) {
    console.error('❌ Cron job error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to update competitions',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// Allow POST for manual triggering
export async function POST(request: Request) {
  return GET(request);
} 