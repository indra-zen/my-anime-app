import Link from 'next/link';
import AnimeCard from '@/components/AnimeCard';
import { getSeasonalAnime } from '@/lib/jikan';
import { JikanResponse } from '@/types/anime';

export default async function SeasonalPage() {
  let seasonal: JikanResponse | null = null;
  let error = null;

  try {
    seasonal = await getSeasonalAnime();
  } catch (e) {
    error = e instanceof Error ? e.message : 'Failed to fetch seasonal anime';
  }

  const currentYear = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  let currentSeason = 'Winter';
  if (month >= 4 && month <= 6) currentSeason = 'Spring';
  if (month >= 7 && month <= 9) currentSeason = 'Summer';
  if (month >= 10 && month <= 12) currentSeason = 'Fall';

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Header */}
      <header className="bg-gray-800/50 backdrop-blur-sm sticky top-0 z-10 border-b border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                My Anime App
              </h1>
            </Link>
            <nav className="flex gap-6">
              <Link href="/" className="hover:text-blue-400 transition-colors">
                Top Anime
              </Link>
              <Link href="/seasonal" className="hover:text-blue-400 transition-colors">
                Seasonal
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-2">
          {currentSeason} {currentYear} Anime
        </h1>
        <p className="text-gray-400 mb-8">Currently airing and upcoming anime this season</p>

        {error && (
          <div className="bg-red-900/50 border border-red-500 rounded-lg p-4 mb-8">
            <p className="text-red-200">Error: {error}</p>
          </div>
        )}

        {seasonal && seasonal.data.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {seasonal.data.map((anime: any) => (
              <AnimeCard key={anime.mal_id} anime={anime} />
            ))}
          </div>
        )}

        {seasonal && seasonal.data.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">No seasonal anime found</p>
          </div>
        )}
      </div>
    </main>
  );
}
