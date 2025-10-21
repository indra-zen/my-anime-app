# My Anime App 🎌

Aplikasi web untuk browsing dan mencari anime, dibuat dengan **Next.js** dan **Jikan API** (MyAnimeList).

## Features ✨

- 🔍 **Search Anime** - Cari anime berdasarkan judul
- ⭐ **Top Rated** - Lihat daftar anime dengan rating tertinggi
- 📅 **Seasonal Anime** - Anime yang sedang tayang musim ini
- 📖 **Detail Anime** - Informasi lengkap tentang anime (sinopsis, score, genre, dll)
- 🎨 **Responsive Design** - Tampilan optimal di desktop dan mobile
- ⚡ **Fast & SEO-Friendly** - Server-side rendering dengan Next.js

## Tech Stack 🛠️

- **Next.js 15** - React framework dengan App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Jikan API v4** - Data source dari MyAnimeList

## Getting Started 🚀

### Prerequisites

- Node.js 18+ 
- npm atau yarn

### Installation

1. Clone repository atau buka di DevContainer

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Buka browser di [http://localhost:3000](http://localhost:3000)

## Available Scripts 📜

```bash
npm run dev      # Run development server
npm run build    # Build untuk production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Deployment 🌐

### Vercel (Recommended)

1. Push code ke GitHub
2. Import project di [Vercel](https://vercel.com)
3. Deploy otomatis! ✨

### Netlify

1. Push code ke GitHub
2. Import project di [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`

### Docker

```bash
docker build -t my-anime-app .
docker run -p 3000:3000 my-anime-app
```

## API Rate Limiting ⚠️

Jikan API memiliki rate limit:
- 3 requests per second
- 60 requests per minute

Aplikasi ini sudah include rate limiting handler untuk menghindari error.

## Project Structure 📁

```
my-anime-app/
├── app/
│   ├── anime/[id]/     # Detail anime page
│   ├── search/         # Search results page
│   ├── seasonal/       # Seasonal anime page
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── AnimeCard.tsx   # Anime card component
│   └── SearchBar.tsx   # Search bar component
├── lib/
│   └── jikan.ts        # Jikan API functions
├── types/
│   └── anime.ts        # TypeScript types
└── public/             # Static assets
```

## Credits 🙏

- Data dari [MyAnimeList](https://myanimelist.net/)
- API oleh [Jikan](https://jikan.moe/)

## License 📄

MIT License - Feel free to use this project!

---

Made with ❤️ using Next.js and Jikan API
