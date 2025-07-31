import { NextResponse } from 'next/server';

export async function GET() {
  try {
    console.log('🧪 Testing simple API route...');
    
    return NextResponse.json({
      success: true,
      message: 'Simple API route working correctly',
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('❌ Test failed:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
} 