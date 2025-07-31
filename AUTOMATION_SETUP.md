# 🚀 Setup Otomatisasi Update Data dari Google Sheets ke Vercel

Sistem ini akan membuat website Anda otomatis terupdate saat ada perubahan di Google Sheets, tanpa perlu deploy ulang.

## 📋 Prerequisites

- Vercel project sudah ter-deploy
- Google Sheets sudah ter-setup dengan data kompetisi
- Environment variables sudah dikonfigurasi di Vercel

## 🔧 Langkah-langkah Setup

### 1. Setup Environment Variables di Vercel

Tambahkan environment variables berikut di dashboard Vercel:

```bash
REVALIDATION_SECRET=your-super-secret-key-here
CRON_SECRET=your-cron-secret-key-here
```

**Cara menambahkan:**
1. Buka dashboard Vercel
2. Pilih project Anda
3. Klik Settings > Environment Variables
4. Tambahkan kedua variable di atas

### 2. Setup Google Apps Script

1. **Buka Google Sheets Anda**
2. **Klik Extensions > Apps Script**
3. **Copy paste kode dari file `google-apps-script.js`**
4. **Update konfigurasi:**
   ```javascript
   const VERCEL_WEBHOOK_URL = 'https://your-app.vercel.app/api/webhook';
   const REVALIDATION_SECRET = 'your-super-secret-key-here';
   ```
5. **Save dan Deploy:**
   - Klik Save (Ctrl+S)
   - Klik Deploy > New deployment
   - Pilih "Web app"
   - Set "Execute as" ke "Me"
   - Set "Who has access" ke "Only myself"
   - Klik Deploy

### 3. Setup Triggers di Google Apps Script

1. **Di Google Apps Script, klik Triggers (ikon jam)**
2. **Klik "Add Trigger"**
3. **Setup trigger pertama:**
   - Function: `onEdit`
   - Event source: `From spreadsheet`
   - Event type: `On edit`
   - Failure notification: `Notify me immediately`
4. **Klik Save**
5. **Setup trigger kedua:**
   - Function: `onChange`
   - Event source: `From spreadsheet`
   - Event type: `On change`
   - Failure notification: `Notify me immediately`
6. **Klik Save**

### 4. Test Setup

1. **Test webhook:**
   - Buka Google Apps Script
   - Pilih function `testWebhook`
   - Klik Run
   - Cek logs untuk memastikan webhook terkirim

2. **Test manual update:**
   - Edit data di Google Sheets
   - Tunggu beberapa detik
   - Refresh website Vercel
   - Data seharusnya sudah terupdate

## 🔄 Cara Kerja Sistem

### 1. **Webhook System (Real-time)**
- Saat ada perubahan di Google Sheets
- Google Apps Script mengirim webhook ke Vercel
- Vercel langsung revalidate cache
- Website terupdate dalam hitungan detik

### 2. **Cron Job System (Backup)**
- Setiap 15 menit, Vercel otomatis fetch data baru
- Sebagai backup jika webhook gagal
- Memastikan data selalu fresh

### 3. **Cache Management**
- Menggunakan Next.js ISR (Incremental Static Regeneration)
- Halaman di-cache untuk performa optimal
- Otomatis revalidate saat ada perubahan

## 🧪 Testing

### Test Webhook
```bash
curl -X POST https://your-app.vercel.app/api/webhook \
  -H "Content-Type: application/json" \
  -d '{"secret":"your-super-secret-key-here"}'
```

### Test Cron Job
```bash
curl -X GET https://your-app.vercel.app/api/cron/update-competitions \
  -H "Authorization: Bearer your-cron-secret-key-here"
```

## 🔍 Monitoring

### Logs di Vercel
1. Buka dashboard Vercel
2. Pilih project
3. Klik Functions
4. Cek logs untuk `/api/webhook` dan `/api/cron/update-competitions`

### Logs di Google Apps Script
1. Buka Google Apps Script
2. Klik View > Execution log
3. Cek logs untuk function `onEdit`, `onChange`, dan `sendWebhookToVercel`

## 🚨 Troubleshooting

### Webhook tidak terkirim
1. Cek URL Vercel sudah benar
2. Cek REVALIDATION_SECRET sudah sama
3. Cek Google Apps Script logs
4. Pastikan trigger sudah ter-setup

### Data tidak terupdate
1. Cek environment variables di Vercel
2. Cek logs di Vercel Functions
3. Test manual dengan curl
4. Pastikan Google Sheets credentials valid

### Cron job tidak jalan
1. Cek CRON_SECRET sudah benar
2. Cek vercel.json sudah ter-deploy
3. Tunggu 15 menit untuk trigger pertama
4. Cek logs di Vercel Functions

## 📊 Status Monitoring

Untuk memantau status otomatisasi:

```bash
# Cek webhook status
curl https://your-app.vercel.app/api/webhook

# Cek cron job status
curl https://your-app.vercel.app/api/cron/update-competitions
```

## 🎯 Hasil Akhir

Setelah setup selesai:
- ✅ Data otomatis terupdate saat ada perubahan di Google Sheets
- ✅ Tidak perlu deploy ulang untuk update data
- ✅ Backup system dengan cron job
- ✅ Real-time updates dengan webhook
- ✅ Cache management untuk performa optimal

## 📞 Support

Jika ada masalah:
1. Cek logs di Vercel dan Google Apps Script
2. Test manual dengan curl commands
3. Pastikan semua environment variables sudah benar
4. Restart deployment jika diperlukan 