import axios from 'axios';
import type { ProductsResponse, Product, Category } from '@/types/product';

const api = axios.create({
  baseURL: 'https://dummyjson.com',
  timeout: 10000,
});

export interface FetchProductsParams {
  limit?: number;
  skip?: number;
  sortBy?: string;
  order?: 'asc' | 'desc';
}

/**
 * GET /products — paginated list of all products
 */
export async function getProducts(params: FetchProductsParams = {}): Promise<ProductsResponse> {
  const { limit = 10, skip = 0, sortBy, order } = params;
  const queryParams: Record<string, string | number> = { limit, skip };
  if (sortBy) queryParams.sortBy = sortBy;
  if (order) queryParams.order = order;

  const { data } = await api.get<ProductsResponse>('/products', { params: queryParams });
  return data;
}

/**
 * GET /products/{id} — single product by ID
 */
export async function getProductById(id: number): Promise<Product> {
  const { data } = await api.get<Product>(`/products/${id}`);
  return data;
}

/**
 * GET /products/search?q={query} — search products
 */
export async function searchProducts(
  query: string,
  params: FetchProductsParams = {}
): Promise<ProductsResponse> {
  const { limit = 10, skip = 0 } = params;
  const { data } = await api.get<ProductsResponse>('/products/search', {
    params: { q: query, limit, skip },
  });
  return data;
}

/**
 * GET /products/categories — all categories
 */
export async function getCategories(): Promise<Category[]> {
  const { data } = await api.get<Category[]>('/products/categories');
  return data;
}

/**
 * GET /products/category/{slug} — products filtered by category
 */
export async function getProductsByCategory(
  slug: string,
  params: FetchProductsParams = {}
): Promise<ProductsResponse> {
  const { limit = 10, skip = 0, sortBy, order } = params;
  const queryParams: Record<string, string | number> = { limit, skip };
  if (sortBy) queryParams.sortBy = sortBy;
  if (order) queryParams.order = order;

  const { data } = await api.get<ProductsResponse>(`/products/category/${slug}`, {
    params: queryParams,
  });
  return data;
}
