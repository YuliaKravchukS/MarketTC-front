export interface Status<T> {
  statusCode: number;
  message: string;
  result: T;
}

export interface HealthCheckStatus extends Status<HealthCheckResult> {}
export interface ProductStatus extends Status<ProductResult[]> {}

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

// interface ProductStatus {
//   statusCode: number;
//   message: string;
//   result: ProductResult[];
// }

// interface ProductResult {
//   id: number;
//   categoryId: number;
//   title: string;
//   description: string;
//   price: number;
//   mainImage: string;
//   images: string[];
// }
