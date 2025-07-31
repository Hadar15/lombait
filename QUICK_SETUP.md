# 🚀 Quick Setup Google Sheets untuk Lombait

## 📋 Format Google Sheets Anda

Berdasarkan informasi yang Anda berikan, format Google Sheets Anda adalah:

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
| M | Website URL | https://hackathon-nasional.com |
| N | Requirements | Mahasiswa/i aktif, tim 3-5 orang |
| O | Event Date | 15-17 Desember 2024 |

## 🔧 Langkah-langkah Setup

### 1. Pastikan Google Sheets Sudah Benar

1. Buka Google Sheets Anda
2. Pastikan sheet pertama bernama **"Competitions"**
3. Pastikan header di baris pertama (A1:O1) sesuai format di atas
4. Pastikan data dimulai dari baris 2 (A2:O2 dst)

### 2. Setup Environment Variables

Buat file `.env.local` di root project dengan isi:

```env
# Google Sheets Configuration
GOOGLE_SHEETS_CLIENT_EMAIL=your-service-account-email@your-project.iam.gserviceaccount.com
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour Private Key Here\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEETS_SPREADSHEET_ID=your-spreadsheet-id-here
```

### 3. Test Koneksi

1. Restart development server:
   ```bash
   npm run dev
   ```

2. Test environment variables:
   - Buka: `http://localhost:3000/api/debug`

3. Test koneksi Google Sheets:
   - Buka: `http://localhost:3000/api/test-connection`

4. Test competitions API:
   - Buka: `http://localhost:3000/api/competitions`

### 4. Verifikasi Data

Jika koneksi berhasil, Anda akan melihat:
- ✅ Environment variables: Set
- ✅ Authentication: Successful
- ✅ Spreadsheet access: Successful
- ✅ Data reading: Successful
- 📈 Rows found: [jumlah baris data Anda]

## 🔍 Troubleshooting

### Error: "Missing environment variables"
- Pastikan file `.env.local` ada di root project
- Pastikan format environment variables benar

### Error: "Permission denied"
- Pastikan service account sudah di-share ke Google Sheets
- Pastikan spreadsheet ID benar

### Error: "No data found"
- Pastikan ada data di range `Competitions!A2:N`
- Pastikan sheet name adalah "Competitions"
- Pastikan data dimulai dari baris 2

### Data tidak tampil di website
- Periksa console browser untuk error
- Periksa terminal development server untuk logs
- Test endpoint `/api/competitions` langsung di browser

## 📊 Expected Result

Setelah setup berhasil, website akan menampilkan:
- Card competitions sesuai data di Google Sheets
- ID 1 = Card pertama dengan data dari baris 2
- ID 2 = Card kedua dengan data dari baris 3
- Dan seterusnya...

## 🆘 Quick Test

1. Buka `http://localhost:3000`
2. Scroll ke bagian "Kompetisi"
3. Anda akan melihat card competitions dengan data dari Google Sheets
4. Jika masih menggunakan fallback data, berarti ada masalah dengan koneksi Google Sheets

## 📞 Bantuan

Jika masih ada masalah:
1. Periksa console browser (F12)
2. Periksa terminal development server
3. Test endpoint `/api/test-connection`
4. Pastikan semua environment variables sudah benar 