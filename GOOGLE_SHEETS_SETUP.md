# 🚀 Panduan Lengkap Setup Google Sheets untuk Lombait

## 📋 Prerequisites
- Akun Google (Gmail)
- Akses ke Google Cloud Console
- Google Sheets yang sudah dibuat

## 🔧 Langkah-langkah Setup

### 1. Buat Google Cloud Project

1. Buka [Google Cloud Console](https://console.cloud.google.com/)
2. Klik "Select a project" di bagian atas
3. Klik "New Project"
4. Isi:
   - **Project name**: `lombait-sheets`
   - **Project ID**: `lombait-sheets-xxxxx` (akan otomatis generate)
5. Klik "Create"

### 2. Aktifkan Google Sheets API

1. Di Google Cloud Console, pilih project yang baru dibuat
2. Buka menu "APIs & Services" > "Library"
3. Cari "Google Sheets API"
4. Klik pada hasil pencarian
5. Klik "Enable"

### 3. Buat Service Account

1. Buka "APIs & Services" > "Credentials"
2. Klik "Create Credentials" > "Service Account"
3. Isi informasi:
   - **Service account name**: `lombait-sheets-service`
   - **Service account ID**: akan otomatis terisi
   - **Description**: `Service account for Lombait Google Sheets integration`
4. Klik "Create and Continue"
5. Di bagian "Grant this service account access to project":
   - Role: "Editor" (untuk akses penuh)
6. Klik "Continue"
7. Klik "Done"

### 4. Generate Private Key

1. Klik pada service account yang baru dibuat (`lombait-sheets-service@lombait-sheets-xxxxx.iam.gserviceaccount.com`)
2. Buka tab "Keys"
3. Klik "Add Key" > "Create new key"
4. Pilih "JSON"
5. Klik "Create"
6. File JSON akan otomatis di-download

### 5. Setup Google Sheets

1. Buka [Google Sheets](https://sheets.google.com/)
2. Buat spreadsheet baru atau gunakan yang sudah ada
3. Beri nama sheet pertama: `Competitions`
4. Buat header di baris pertama (A1:O1):
   ```
   ID | Title | Description | Participants | Prize | Location | Registration Deadline | Organizer | Image URL | Status | Category | Tags | Website | Requirements | Event Date
   ```
5. Tambahkan beberapa data contoh di baris 2-4

### 6. Share Google Sheets

1. Di Google Sheets, klik tombol "Share" (biru di kanan atas)
2. Klik "Add people and groups"
3. Masukkan email service account dari file JSON yang di-download:
   ```
   lombait-sheets-service@lombait-sheets-xxxxx.iam.gserviceaccount.com
   ```
4. Berikan permission "Editor"
5. Klik "Send"

### 7. Dapatkan Spreadsheet ID

1. Dari URL Google Sheets, copy ID-nya:
   ```
   https://docs.google.com/spreadsheets/d/SPREADSHEET_ID_AKAN_DISINI/edit
   ```
2. Copy bagian `SPREADSHEET_ID_AKAN_DISINI`

### 8. Setup Environment Variables

1. Buka file JSON yang di-download dari Google Cloud Console
2. Copy nilai-nilai berikut:

**Dari file JSON:**
- `client_email`: email service account
- `private_key`: private key (dalam tanda kutip)

**Dari Google Sheets URL:**
- Spreadsheet ID

3. Buat file `.env.local` di root project:

```env
# Google Sheets Configuration
GOOGLE_SHEETS_CLIENT_EMAIL=lombait-sheets-service@lombait-sheets-xxxxx.iam.gserviceaccount.com
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEETS_SPREADSHEET_ID=1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
```

### 9. Test Koneksi

1. Restart development server:
   ```bash
   npm run dev
   ```

2. Test API endpoint:
   - Buka browser ke: `http://localhost:3000/api/test-sheets`
   - Atau: `http://localhost:3000/api/debug`

3. Test competitions API:
   - Buka: `http://localhost:3000/api/competitions`

## 🔍 Troubleshooting

### Error: "Spreadsheet ID not configured"
- Pastikan `GOOGLE_SHEETS_SPREADSHEET_ID` sudah diset dengan benar
- Pastikan ID diambil dari URL Google Sheets

### Error: "Google Sheets credentials not configured"
- Pastikan `GOOGLE_SHEETS_CLIENT_EMAIL` dan `GOOGLE_SHEETS_PRIVATE_KEY` sudah diset
- Pastikan private key masih dalam format yang benar (dengan `\n`)

### Error: "Permission denied"
- Pastikan service account sudah di-share ke spreadsheet
- Pastikan spreadsheet ID benar
- Pastikan service account memiliki permission "Editor"

### Error: "No data found"
- Pastikan ada data di range `Competitions!A2:O`
- Pastikan format data sesuai dengan yang diharapkan
- Pastikan sheet name adalah "Competitions"

### Error: "Invalid private key"
- Pastikan private key diapit dengan tanda kutip ganda
- Pastikan `\n` sudah benar untuk line breaks
- Pastikan tidak ada spasi ekstra

## 📊 Format Data Google Sheets

Pastikan spreadsheet memiliki format berikut:

| Kolom | Header | Contoh Data |
|-------|--------|-------------|
| A | ID | 1 |
| B | Title | Hackathon Nasional 2024 |
| C | Description | Kompetisi pengembangan aplikasi... |
| D | Participants | 150 |
| E | Prize | Rp 50.000.000 |
| F | Location | Jakarta |
| G | Registration Deadline | 10 Desember 2024 |
| H | Organizer | Kementerian Komunikasi dan Informatika |
| I | Image URL | https://images.unsplash.com/... |
| J | Status | Active/Upcoming/Completed |
| K | Category | Hackathon |
| L | Tags | Web Development, Mobile App, AI/ML |
| M | Website | https://hackathon-nasional.com |
| N | Requirements | Mahasiswa/i aktif, tim 3-5 orang |
| O | Event Date | 15-17 Desember 2024 |

## ✅ Checklist Setup

- [ ] Google Cloud Project dibuat
- [ ] Google Sheets API diaktifkan
- [ ] Service Account dibuat
- [ ] Private Key di-generate
- [ ] Google Sheets dibuat dengan format yang benar
- [ ] Service Account di-share ke Google Sheets
- [ ] Environment variables diset di `.env.local`
- [ ] Development server di-restart
- [ ] API test berhasil
- [ ] Data competitions muncul di website

## 🆘 Bantuan

Jika masih mengalami masalah:

1. Periksa console browser untuk error detail
2. Periksa terminal development server untuk logs
3. Test endpoint `/api/debug` untuk cek environment variables
4. Test endpoint `/api/test-sheets` untuk cek koneksi Google Sheets
5. Pastikan semua langkah di checklist sudah selesai 