const BASE_URL = 'https://api.jikan.moe/v4';

// Rate limiting helper
let lastRequestTime = 0;
const MIN_REQUEST_INTERVAL = 350; // 350ms between requests (slightly safer than 333ms)

async function rateLimitedFetch(url: string) {
  const now = Date.now();
  const timeSinceLastRequest = now - lastRequestTime;
  
  if (timeSinceLastRequest < MIN_REQUEST_INTERVAL) {
    await new Promise(resolve => 
      setTimeout(resolve, MIN_REQUEST_INTERVAL - timeSinceLastRequest)
    );
  }
  
  lastRequestTime = Date.now();
  const response = await fetch(url, { next: { revalidate: 3600 } }); // Cache for 1 hour
  
  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }
  
  return response.json();
}

export async function getTopAnime(page: number = 1) {
  return rateLimitedFetch(`${BASE_URL}/top/anime?page=${page}`);
}

export async function searchAnime(query: string, page: number = 1) {
  return rateLimitedFetch(`${BASE_URL}/anime?q=${encodeURIComponent(query)}&page=${page}`);
}

export async function getAnimeById(id: number) {
  return rateLimitedFetch(`${BASE_URL}/anime/${id}`);
}

export async function getSeasonalAnime(year?: number, season?: string) {
  const currentYear = year || new Date().getFullYear();
  const currentSeason = season || getCurrentSeason();
  return rateLimitedFetch(`${BASE_URL}/seasons/${currentYear}/${currentSeason}`);
}

function getCurrentSeason() {
  const month = new Date().getMonth() + 1;
  if (month >= 1 && month <= 3) return 'winter';
  if (month >= 4 && month <= 6) return 'spring';
  if (month >= 7 && month <= 9) return 'summer';
  return 'fall';
}
