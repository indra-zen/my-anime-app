import Image from 'next/image';
import Link from 'next/link';
import { AnimeData } from '@/types/anime';

interface AnimeCardProps {
  anime: AnimeData;
}

export default function AnimeCard({ anime }: AnimeCardProps) {
  return (
    <Link href={`/anime/${anime.mal_id}`}>
      <div className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-200 cursor-pointer shadow-lg hover:shadow-xl">
        <div className="relative aspect-[2/3] w-full">
          <Image
            src={anime.images.jpg.large_image_url || anime.images.jpg.image_url}
            alt={anime.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          />
          {anime.score && (
            <div className="absolute top-2 right-2 bg-yellow-500 text-black font-bold px-2 py-1 rounded">
              ⭐ {anime.score}
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2 line-clamp-2 min-h-[3.5rem]">
            {anime.title_english || anime.title}
          </h3>
          <div className="flex justify-between text-sm text-gray-400">
            <span>{anime.year || 'TBA'}</span>
            <span>{anime.episodes ? `${anime.episodes} eps` : 'Ongoing'}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
