import { NextResponse } from 'next/server';

export async function GET() {
  try {
    console.log('🔍 Debug: Checking environment variables...');
    
    const envVars = {
      GOOGLE_SHEETS_CLIENT_EMAIL: process.env.GOOGLE_SHEETS_CLIENT_EMAIL ? 'Set' : 'Not Set',
      GOOGLE_SHEETS_PRIVATE_KEY: process.env.GOOGLE_SHEETS_PRIVATE_KEY ? 'Set' : 'Not Set',
      GOOGLE_SHEETS_SPREADSHEET_ID: process.env.GOOGLE_SHEETS_SPREADSHEET_ID ? 'Set' : 'Not Set',
    };
    
    console.log('📊 Environment variables status:', envVars);
    
    return NextResponse.json({
      success: true,
      environment: envVars,
      message: 'Environment variables check completed'
    });
    
  } catch (error) {
    console.error('❌ Debug error:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
} 