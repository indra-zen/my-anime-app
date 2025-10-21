import Link from 'next/link';
import { searchAnime } from '@/lib/jikan';
import AnimeCard from '@/components/AnimeCard';
import { JikanResponse } from '@/types/anime';

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = q || '';
  let results: JikanResponse | null = null;
  let error = null;

  if (query) {
    try {
      results = await searchAnime(query);
    } catch (e) {
      error = e instanceof Error ? e.message : 'Failed to search anime';
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Header */}
      <header className="bg-gray-800/50 backdrop-blur-sm sticky top-0 z-10 border-b border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <Link href="/">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              My Anime App
            </h1>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">
          {query ? `Search Results for "${query}"` : 'Search Anime'}
        </h1>

        {error && (
          <div className="bg-red-900/50 border border-red-500 rounded-lg p-4 mb-8">
            <p className="text-red-200">Error: {error}</p>
          </div>
        )}

        {!query && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">Please enter a search term</p>
            <Link
              href="/"
              className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Go to Home
            </Link>
          </div>
        )}

        {query && results && results.data.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">No results found for "{query}"</p>
            <Link
              href="/"
              className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Go to Home
            </Link>
          </div>
        )}

        {results && results.data.length > 0 && (
          <>
            <p className="text-gray-400 mb-6">
              Found {results.data.length} results
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {results.data.map((anime: any) => (
                <AnimeCard key={anime.mal_id} anime={anime} />
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
