export interface Status<T> {
  statusCode: number;
  message: string;
  result: T;
}

export interface HealthCheckStatus extends Status<HealthCheckResult> {}
export interface ProductStatus extends Status<ProductResult[]> {}
export interface CatalogStatus extends Status<CategoriesResult[]> {}

export interface HealthCheckResult {
  database: string;
  server: string;
}

export interface ProductResult {
  id: number;
  categoryId: number;
  title: string;
  description: string;
  price: number;
  mainImage: string;
  images: string[];
}
export interface LogoProps {
  paddingX?: string;
}
export interface CategoriesResult {
  id: number;
  title: string;
  image: string;
}
export type ProductItemProps = {
  product: CategoriesResult;
};

export type CatalogAllProductsProps = {
  showAll: boolean;
};
