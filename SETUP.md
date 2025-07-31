# Setup Google Sheets Integration

## Langkah-langkah Setup Environment Variables

### 1. Buat Service Account di Google Cloud Console

1. Buka [Google Cloud Console](https://console.cloud.google.com/)
2. Buat project baru atau pilih project yang sudah ada
3. Aktifkan Google Sheets API:
   - Buka "APIs & Services" > "Library"
   - Cari "Google Sheets API"
   - Klik "Enable"

### 2. Buat Service Account

1. Buka "APIs & Services" > "Credentials"
2. Klik "Create Credentials" > "Service Account"
3. Isi informasi service account:
   - Name: `lombait-sheets-service`
   - Description: `Service account for Lombait Google Sheets integration`
4. Klik "Create and Continue"
5. Skip role assignment (klik "Continue")
6. Klik "Done"

### 3. Generate Private Key

1. Klik pada service account yang baru dibuat
2. Buka tab "Keys"
3. Klik "Add Key" > "Create new key"
4. Pilih "JSON"
5. Klik "Create"
6. File JSON akan di-download

### 4. Share Google Sheets

1. Buka Google Sheets yang akan digunakan
2. Klik "Share" (tombol biru di kanan atas)
3. Tambahkan email service account (dari file JSON yang di-download)
4. Berikan permission "Editor"

### 5. Setup Environment Variables

Buat file `.env.local` di root project dengan isi:

```env
# Google Sheets Configuration
GOOGLE_SHEETS_CLIENT_EMAIL=your-service-account-email@your-project.iam.gserviceaccount.com
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour Private Key Here\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEETS_SPREADSHEET_ID=your-spreadsheet-id-here
```

**Catatan:**
- Ganti `your-service-account-email@your-project.iam.gserviceaccount.com` dengan email dari file JSON
- Ganti `Your Private Key Here` dengan private key dari file JSON
- Ganti `your-spreadsheet-id-here` dengan ID spreadsheet (dari URL)

### 6. Format Google Sheets

Pastikan spreadsheet memiliki kolom dengan urutan berikut:
- A: ID
- B: Title
- C: Description
- D: Participants
- E: Prize
- F: Location
- G: Registration Deadline
- H: Organizer
- I: Image URL
- J: Status (Active/Upcoming/Completed)
- K: Category
- L: Tags (comma-separated)
- M: Website
- N: Requirements
- O: Event Date

### 7. Restart Development Server

```bash
npm run dev
```

## Troubleshooting

### Error: "Spreadsheet ID not configured"
- Pastikan `GOOGLE_SHEETS_SPREADSHEET_ID` sudah diset dengan benar

### Error: "Google Sheets credentials not configured"
- Pastikan `GOOGLE_SHEETS_CLIENT_EMAIL` dan `GOOGLE_SHEETS_PRIVATE_KEY` sudah diset
- Pastikan private key masih dalam format yang benar

### Error: "Permission denied"
- Pastikan service account sudah di-share ke spreadsheet
- Pastikan spreadsheet ID benar

### Error: "No data found"
- Pastikan ada data di range `Competitions!A2:O`
- Pastikan format data sesuai dengan yang diharapkan 