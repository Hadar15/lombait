/**
 * Script untuk testing otomatisasi update data
 * 
 * Cara menggunakan:
 * 1. Ganti YOUR_VERCEL_URL dengan URL Vercel Anda
 * 2. Ganti YOUR_SECRET dengan secret yang sama di Vercel
 * 3. Jalankan script ini untuk test
 */

const VERCEL_URL = 'https://your-app.vercel.app';
const REVALIDATION_SECRET = 'your-super-secret-key-here';
const CRON_SECRET = 'your-cron-secret-key-here';

/**
 * Test webhook endpoint
 */
async function testWebhook() {
  console.log('🧪 Testing webhook...');
  
  try {
    const response = await fetch(`${VERCEL_URL}/api/webhook`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        secret: REVALIDATION_SECRET,
        path: '/',
        timestamp: new Date().toISOString(),
        source: 'test-script'
      })
    });

    const data = await response.json();
    console.log('✅ Webhook test result:', data);
    return data;
  } catch (error) {
    console.error('❌ Webhook test failed:', error);
    return null;
  }
}

/**
 * Test cron job endpoint
 */
async function testCronJob() {
  console.log('🕐 Testing cron job...');
  
  try {
    const response = await fetch(`${VERCEL_URL}/api/cron/update-competitions`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${CRON_SECRET}`
      }
    });

    const data = await response.json();
    console.log('✅ Cron job test result:', data);
    return data;
  } catch (error) {
    console.error('❌ Cron job test failed:', error);
    return null;
  }
}

/**
 * Test competitions API
 */
async function testCompetitionsAPI() {
  console.log('📊 Testing competitions API...');
  
  try {
    const response = await fetch(`${VERCEL_URL}/api/competitions`);
    const data = await response.json();
    console.log('✅ Competitions API result:', {
      count: data.competitions?.length || 0,
      sample: data.competitions?.[0] || null
    });
    return data;
  } catch (error) {
    console.error('❌ Competitions API test failed:', error);
    return null;
  }
}

/**
 * Test webhook GET endpoint
 */
async function testWebhookStatus() {
  console.log('📡 Testing webhook status...');
  
  try {
    const response = await fetch(`${VERCEL_URL}/api/webhook`);
    const data = await response.json();
    console.log('✅ Webhook status:', data);
    return data;
  } catch (error) {
    console.error('❌ Webhook status test failed:', error);
    return null;
  }
}

/**
 * Run all tests
 */
async function runAllTests() {
  console.log('🚀 Starting automation tests...\n');
  
  // Test webhook status
  await testWebhookStatus();
  console.log('');
  
  // Test competitions API
  await testCompetitionsAPI();
  console.log('');
  
  // Test webhook
  await testWebhook();
  console.log('');
  
  // Test cron job
  await testCronJob();
  console.log('');
  
  console.log('✅ All tests completed!');
}

// Run tests if this script is executed directly
if (typeof window === 'undefined') {
  // Node.js environment
  const fetch = require('node-fetch');
  runAllTests();
} else {
  // Browser environment
  window.runAllTests = runAllTests;
  window.testWebhook = testWebhook;
  window.testCronJob = testCronJob;
  window.testCompetitionsAPI = testCompetitionsAPI;
  window.testWebhookStatus = testWebhookStatus;
  
  console.log('🧪 Test functions available:');
  console.log('- runAllTests()');
  console.log('- testWebhook()');
  console.log('- testCronJob()');
  console.log('- testCompetitionsAPI()');
  console.log('- testWebhookStatus()');
} 