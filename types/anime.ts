// Types untuk Jikan API
export interface AnimeData {
  mal_id: number;
  title: string;
  title_english: string | null;
  images: {
    jpg: {
      image_url: string;
      large_image_url: string;
    };
  };
  score: number | null;
  episodes: number | null;
  status: string;
  synopsis: string | null;
  year: number | null;
  genres: Array<{
    mal_id: number;
    name: string;
  }>;
}

export interface JikanResponse {
  data: AnimeData[];
  pagination: {
    has_next_page: boolean;
    current_page: number;
    last_visible_page: number;
  };
}

export interface AnimeDetailResponse {
  data: AnimeData;
}
