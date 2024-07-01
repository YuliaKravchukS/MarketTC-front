export interface RootObject {
  statusCode: number;
  message: string;
  result: Result[];
}

export interface Result {
  id: number;
  title: string;
  image: string;
  products: Product[];
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  image: string;
}
export const BACKEND_URL =
  "https://proactive-flexibility-production.up.railway.app";

const fetchAllCategories = async (): Promise<Result[]> => {
  try {
    const response = await fetch(`${BACKEND_URL}/categories`, {
      cache: "no-cache",
    });
    const data: RootObject = await response.json();
    return data.result;
  } catch (err) {
    console.error("Failed to fetch all categories:", err);
    return [];
  }
};

export default fetchAllCategories;
