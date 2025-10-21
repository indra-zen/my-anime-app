# Deployment Guide

## Quick Deploy to Vercel (Easiest) 🚀

1. Push code ke GitHub repository:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

2. Buka [vercel.com](https://vercel.com) dan login dengan GitHub

3. Click "New Project" → Import repository

4. Deploy! (Tidak perlu konfigurasi tambahan, Vercel otomatis detect Next.js)

5. Aplikasi akan live di: `https://your-app-name.vercel.app`

## Deploy to Netlify

1. Push code ke GitHub

2. Buka [netlify.com](https://netlify.com) dan login

3. Click "Add new site" → Import from Git

4. Pilih repository

5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Install command: `npm install`

6. Deploy!

## Deploy with Docker

### Build image:
```bash
docker build -t my-anime-app .
```

### Run container:
```bash
docker run -p 3000:3000 my-anime-app
```

### Deploy to cloud:
- Google Cloud Run
- AWS ECS
- Azure Container Apps
- Railway
- Fly.io

## Environment Variables

Tidak ada environment variables yang diperlukan! 🎉
Aplikasi langsung connect ke Jikan API tanpa API key.

## Notes

- ✅ Aplikasi sudah production-ready
- ✅ Images dioptimasi dengan Next.js Image
- ✅ Rate limiting sudah ditangani
- ✅ SEO-friendly dengan Server-Side Rendering
- ✅ Caching untuk performance

## Performance Tips

1. **Vercel** (Recommended) - Best Next.js support
2. **Netlify** - Good alternative with free tier
3. **Railway** - Easy deploy dari GitHub
4. **Render** - Free hosting option

---

Selamat mencoba! 🎌
