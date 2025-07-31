# 🔧 Troubleshooting Cache di Vercel

## 🚨 Masalah: Data di Vercel tidak terupdate seperti di localhost

### Penyebab Utama

1. **Development vs Production Mode**
   - Localhost: Development mode, cache dinonaktifkan
   - Vercel: Production mode, cache agresif untuk performa

2. **ISR (Incremental Static Regeneration)**
   - Localhost: Tidak ada ISR
   - Vercel: Menggunakan ISR dengan cache

3. **API Routes Caching**
   - Localhost: No cache headers
   - Vercel: Cache API responses

## ✅ Solusi yang Sudah Diimplementasikan

### 1. **Force Dynamic Rendering**
```typescript
// app/page.tsx
export const dynamic = 'force-dynamic';
export const revalidate = 0;
```

### 2. **Aggressive Cache Busting**
```typescript
// app/api/competitions/route.ts
response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
response.headers.set('Pragma', 'no-cache');
response.headers.set('Expires', '0');
response.headers.set('Surrogate-Control', 'no-store');
```

### 3. **Middleware Cache Control**
```typescript
// middleware.ts
if (request.nextUrl.pathname.startsWith('/api/')) {
  response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
}
```

### 4. **Client-side Cache Busting**
```typescript
// components/sections/FeaturedCompetitions.tsx
const timestamp = new Date().getTime();
const response = await fetch(`/api/competitions?t=${timestamp}`, {
  cache: 'no-store',
  headers: {
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache'
  }
});
```

## 🧪 Testing Cache

### 1. **Test Manual Revalidation**
```bash
curl -X POST https://your-app.vercel.app/api/revalidate \
  -H "Content-Type: application/json" \
  -d '{"secret":"your-sevalidation-secret"}'
```

### 2. **Test Webhook**
```bash
curl -X POST https://your-app.vercel.app/api/webhook \
  -H "Content-Type: application/json" \
  -d '{"secret":"your-revalidation-secret"}'
```

### 3. **Test API dengan Cache Busting**
```bash
curl "https://your-app.vercel.app/api/competitions?t=$(date +%s)"
```

## 🔍 Monitoring Cache Status

### 1. **Cek Response Headers**
```bash
curl -I https://your-app.vercel.app/api/competitions
```

### 2. **Cek Cache Headers**
```bash
curl -H "Cache-Control: no-cache" https://your-app.vercel.app/api/competitions
```

### 3. **Test dengan Browser DevTools**
1. Buka DevTools (F12)
2. Klik Network tab
3. Refresh halaman
4. Cek response headers untuk `Cache-Control`

## 🚨 Troubleshooting Steps

### Step 1: Cek Environment Variables
```bash
# Pastikan environment variables sudah benar
REVALIDATION_SECRET=your-secret
CRON_SECRET=your-cron-secret
```

### Step 2: Test Manual Revalidation
```bash
# Test revalidation endpoint
curl -X POST https://your-app.vercel.app/api/revalidate \
  -H "Content-Type: application/json" \
  -d '{"secret":"your-sevalidation-secret"}'
```

### Step 3: Clear Vercel Cache
1. Buka dashboard Vercel
2. Pilih project
3. Klik Settings > General
4. Scroll ke "Build & Development Settings"
5. Klik "Clear Cache and Redeploy"

### Step 4: Force Redeploy
```bash
# Commit perubahan
git add .
git commit -m "Fix cache issues"
git push
```

### Step 5: Test dengan Hard Refresh
1. Buka website Vercel
2. Tekan Ctrl+Shift+R (hard refresh)
3. Cek apakah data terupdate

## 📊 Debug Commands

### 1. **Test API Response**
```bash
curl -v https://your-app.vercel.app/api/competitions
```

### 2. **Test dengan Timestamp**
```bash
curl "https://your-app.vercel.app/api/competitions?t=$(date +%s)"
```

### 3. **Test Cache Headers**
```bash
curl -I https://your-app.vercel.app/api/competitions
```

## 🎯 Expected Behavior

Setelah implementasi solusi:

### ✅ **Yang Seharusnya Terjadi**
- Data terupdate dalam 5-10 detik setelah edit sheets
- Cache headers menunjukkan `no-store`
- API response selalu fresh
- Hard refresh menampilkan data terbaru

### ❌ **Yang Tidak Seharusnya Terjadi**
- Data tidak terupdate setelah edit sheets
- Cache headers menunjukkan `max-age`
- API response cached
- Hard refresh masih menampilkan data lama

## 🔧 Advanced Solutions

### 1. **Disable ISR Completely**
```typescript
// app/page.tsx
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';
```

### 2. **Force Server-Side Rendering**
```typescript
// app/layout.tsx
export const dynamic = 'force-dynamic';
```

### 3. **Custom Cache Headers**
```typescript
// middleware.ts
response.headers.set('X-Cache-Status', 'MISS');
response.headers.set('X-Cache-Control', 'no-store');
```

## 📞 Support

Jika masalah masih berlanjut:

1. **Cek Vercel Logs**
   - Dashboard Vercel > Functions > Logs

2. **Test dengan curl commands**
   - Pastikan API response fresh

3. **Clear browser cache**
   - Ctrl+Shift+Delete > Clear all

4. **Test di incognito mode**
   - Buka website di incognito/private window

5. **Contact support**
   - Jika semua solusi tidak berhasil 