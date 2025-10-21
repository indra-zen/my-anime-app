import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getAnimeById } from '@/lib/jikan';
import { AnimeDetailResponse } from '@/types/anime';

export default async function AnimePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const animeId = parseInt(id);
  
  if (isNaN(animeId)) {
    notFound();
  }

  let animeData: AnimeDetailResponse | null = null;
  let error = null;

  try {
    animeData = await getAnimeById(animeId);
  } catch (e) {
    error = e instanceof Error ? e.message : 'Failed to fetch anime';
  }

  if (!animeData) {
    notFound();
  }

  const anime = animeData.data;

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
        {error && (
          <div className="bg-red-900/50 border border-red-500 rounded-lg p-4 mb-8">
            <p className="text-red-200">Error: {error}</p>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-8">
          {/* Image */}
          <div className="md:col-span-1">
            <div className="relative aspect-[2/3] w-full rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={anime.images.jpg.large_image_url || anime.images.jpg.image_url}
                alt={anime.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold mb-2">{anime.title}</h1>
            {anime.title_english && anime.title_english !== anime.title && (
              <h2 className="text-2xl text-gray-400 mb-4">{anime.title_english}</h2>
            )}

            <div className="flex flex-wrap gap-4 mb-6">
              {anime.score && (
                <div className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-lg">
                  ⭐ {anime.score} / 10
                </div>
              )}
              <div className="bg-gray-700 px-4 py-2 rounded-lg">
                {anime.status}
              </div>
              {anime.episodes && (
                <div className="bg-gray-700 px-4 py-2 rounded-lg">
                  {anime.episodes} Episodes
                </div>
              )}
              {anime.year && (
                <div className="bg-gray-700 px-4 py-2 rounded-lg">
                  {anime.year}
                </div>
              )}
            </div>

            {/* Genres */}
            {anime.genres && anime.genres.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Genres</h3>
                <div className="flex flex-wrap gap-2">
                  {anime.genres.map((genre: { mal_id: number; name: string }) => (
                    <span
                      key={genre.mal_id}
                      className="bg-blue-600 px-3 py-1 rounded-full text-sm"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Synopsis */}
            {anime.synopsis && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Synopsis</h3>
                <p className="text-gray-300 leading-relaxed">{anime.synopsis}</p>
              </div>
            )}

            <Link
              href="/"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
