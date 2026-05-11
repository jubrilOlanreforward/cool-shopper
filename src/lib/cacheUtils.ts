const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

/**
 * Get cached data from localStorage if it exists and is within the TTL.
 * Returns null if no cache, expired, or SSR.
 */
export function getCachedData<T>(key: string): T | null {
  if (typeof window === 'undefined') return null;

  try {
    const cached = localStorage.getItem(key);
    if (!cached) return null;

    const { data, timestamp } = JSON.parse(cached) as CacheEntry<T>;
    if (Date.now() - timestamp < CACHE_DURATION) {
      return data;
    }
    // Expired — remove stale entry
    localStorage.removeItem(key);
    return null;
  } catch {
    return null;
  }
}

/**
 * Save data to localStorage with a timestamp for TTL checking.
 */
export function setCachedData<T>(key: string, data: T): void {
  if (typeof window === 'undefined') return;

  try {
    const entry: CacheEntry<T> = { data, timestamp: Date.now() };
    localStorage.setItem(key, JSON.stringify(entry));
  } catch {
    // localStorage might be full or disabled — silently fail
  }
}

/**
 * Persist data without TTL (e.g., cart items).
 */
export function setPersistentData<T>(key: string, data: T): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch {
    // silently fail
  }
}

/**
 * Get persistent data without TTL check.
 */
export function getPersistentData<T>(key: string): T | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

// Cache keys
export const CACHE_KEYS = {
  products: (skip: number, limit: number) => `products_page_${skip}_${limit}`,
  product: (id: number) => `product_${id}`,
  categories: 'categories',
  search: (query: string) => `search_${query}`,
  cart: 'serene_shop_cart',
} as const;
