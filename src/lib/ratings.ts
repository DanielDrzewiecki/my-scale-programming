export type PlatformRating = {
  rating: number;
  total: number;
};

function getCache<T>(key: string, maxAgeMs: number): T | null {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { ts: number; data: T };
    if (Date.now() - parsed.ts > maxAgeMs) return null;
    return parsed.data;
  } catch {
    return null;
  }
}

function setCache<T>(key: string, data: T): void {
  try {
    localStorage.setItem(key, JSON.stringify({ ts: Date.now(), data }));
  } catch {}
}

export async function fetchGoogleRating(): Promise<PlatformRating | null> {
  const placeId = import.meta.env.VITE_GOOGLE_PLACE_ID as string | undefined;
  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY as string | undefined;
  const cacheKey = 'rating_google_v1';

  const cached = getCache<PlatformRating>(cacheKey, 60 * 60 * 1000);
  if (cached) return cached;
  if (!placeId || !apiKey) return null;

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(
      placeId
    )}&fields=rating,user_ratings_total&key=${encodeURIComponent(apiKey)}`;
    const res = await fetch(url);
    if (!res.ok) return null;
    const json = await res.json();
    const rating = json?.result?.rating as number | undefined;
    const total = json?.result?.user_ratings_total as number | undefined;
    if (typeof rating === 'number' && typeof total === 'number') {
      const data: PlatformRating = { rating, total };
      setCache(cacheKey, data);
      return data;
    }
    return null;
  } catch {
    return null;
  }
}

export async function fetchTrustpilotRating(): Promise<PlatformRating | null> {
  const businessUnitId = import.meta.env
    .VITE_TRUSTPILOT_BUSINESS_UNIT_ID as string | undefined;
  const apiKey = import.meta.env.VITE_TRUSTPILOT_API_KEY as string | undefined;
  const cacheKey = 'rating_trustpilot_v1';

  const cached = getCache<PlatformRating>(cacheKey, 60 * 60 * 1000);
  if (cached) return cached;
  if (!businessUnitId || !apiKey) return null;

  try {
    const url = `https://api.trustpilot.com/v1/business-units/${encodeURIComponent(
      businessUnitId
    )}`;
    const res = await fetch(url, { headers: { apikey: apiKey } });
    if (!res.ok) return null;
    const json = await res.json();
    const rating = json?.score?.trustScore as number | undefined;
    const total = json?.numberOfReviews as number | undefined;
    if (typeof rating === 'number') {
      const normalized = rating > 5 ? rating / 2 : rating;
      const data: PlatformRating = { rating: normalized, total: total ?? 0 };
      setCache(cacheKey, data);
      return data;
    }
    return null;
  } catch {
    return null;
  }
}


