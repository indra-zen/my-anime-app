import Link from 'next/link';
import SearchBar from '@/components/SearchBar';
import AnimeCard from '@/components/AnimeCard';
import { getTopAnime } from '@/lib/jikan';
import { JikanResponse } from '@/types/anime';

export default async function Home() {
  let topAnime: JikanResponse | null = null;
  let error = null;

  try {
    topAnime = await getTopAnime(1);
  } catch (e) {
    error = e instanceof Error ? e.message : 'Failed to fetch anime';
  }

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

      {/* Search Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">Discover Amazing Anime</h2>
          <p className="text-gray-400 text-lg">
            Powered by Jikan API - MyAnimeList Data
          </p>
        </div>
        <SearchBar />
      </section>

      {/* Top Anime Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Top Rated Anime</h2>
        
        {error && (
          <div className="bg-red-900/50 border border-red-500 rounded-lg p-4 mb-8">
            <p className="text-red-200">Error: {error}</p>
          </div>
        )}

        {topAnime && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {topAnime.data.slice(0, 20).map((anime: any) => (
              <AnimeCard key={anime.mal_id} anime={anime} />
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 mt-20 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>Data provided by <a href="https://jikan.moe/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Jikan API</a></p>
          <p className="mt-2">MyAnimeList &copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    </main>
  );
}
