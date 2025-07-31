import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { secret, path } = body;

    // Verify secret
    if (secret !== process.env.REVALIDATION_SECRET) {
      return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
    }

    // Revalidate specific paths
    if (path) {
      revalidatePath(path);
      console.log(`✅ Revalidated path: ${path}`);
    } else {
      // Revalidate all important paths
      revalidatePath('/');
      revalidatePath('/competitions');
      revalidatePath('/api/competitions');
      console.log('✅ Revalidated all paths');
    }

    return NextResponse.json({ 
      message: 'Revalidation successful',
      revalidated: true,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('❌ Revalidation error:', error);
    return NextResponse.json(
      { error: 'Revalidation failed' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ 
    message: 'Revalidation endpoint is active',
    timestamp: new Date().toISOString()
  });
} 