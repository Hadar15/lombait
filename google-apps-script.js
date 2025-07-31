/**
 * Google Apps Script untuk mengirim webhook ke Vercel saat sheets berubah
 * 
 * Cara setup:
 * 1. Buka Google Sheets Anda
 * 2. Klik Extensions > Apps Script
 * 3. Copy paste kode ini
 * 4. Ganti YOUR_VERCEL_URL dengan URL Vercel Anda
 * 5. Ganti YOUR_REVALIDATION_SECRET dengan secret yang sama di Vercel
 * 6. Save dan deploy
 * 7. Setup trigger untuk onEdit
 */

// Konfigurasi
const VERCEL_WEBHOOK_URL = 'https://your-app.vercel.app/api/webhook';
const REVALIDATION_SECRET = 'your-secret-key-here';

/**
 * Trigger saat ada perubahan di sheets
 */
function onEdit(e) {
  try {
    console.log('📝 Sheet edited, sending webhook...');
    sendWebhookToVercel();
  } catch (error) {
    console.error('❌ Error in onEdit:', error);
  }
}

/**
 * Trigger saat ada perubahan struktur sheets
 */
function onChange(e) {
  try {
    console.log('🔄 Sheet structure changed, sending webhook...');
    sendWebhookToVercel();
  } catch (error) {
    console.error('❌ Error in onChange:', error);
  }
}

/**
 * Mengirim webhook ke Vercel
 */
function sendWebhookToVercel() {
  try {
    const payload = {
      secret: REVALIDATION_SECRET,
      path: '/',
      timestamp: new Date().toISOString(),
      source: 'google-sheets'
    };

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      payload: JSON.stringify(payload)
    };

    const response = UrlFetchApp.fetch(VERCEL_WEBHOOK_URL, options);
    const responseCode = response.getResponseCode();
    const responseText = response.getContentText();

    console.log(`✅ Webhook sent successfully! Response: ${responseCode} - ${responseText}`);
    
    // Log untuk debugging
    console.log('📊 Webhook payload:', JSON.stringify(payload, null, 2));
    console.log('📊 Response:', responseText);
    
  } catch (error) {
    console.error('❌ Failed to send webhook:', error);
    console.error('🔍 Error details:', error.toString());
  }
}

/**
 * Test function untuk manual trigger
 */
function testWebhook() {
  console.log('🧪 Testing webhook...');
  sendWebhookToVercel();
}

/**
 * Setup trigger otomatis
 */
function setupTriggers() {
  // Hapus trigger yang ada
  const triggers = ScriptApp.getProjectTriggers();
  triggers.forEach(trigger => {
    if (trigger.getHandlerFunction() === 'onEdit' || trigger.getHandlerFunction() === 'onChange') {
      ScriptApp.deleteTrigger(trigger);
    }
  });

  // Buat trigger baru
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  
  // Trigger untuk onEdit
  ScriptApp.newTrigger('onEdit')
    .forSpreadsheet(spreadsheet)
    .onEdit()
    .create();
    
  // Trigger untuk onChange
  ScriptApp.newTrigger('onChange')
    .forSpreadsheet(spreadsheet)
    .onChange()
    .create();
    
  console.log('✅ Triggers setup successfully!');
}

/**
 * Manual trigger untuk update sekarang
 */
function manualUpdate() {
  console.log('🔄 Manual update triggered...');
  sendWebhookToVercel();
} 