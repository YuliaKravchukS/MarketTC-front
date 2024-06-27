// "use client";

// import React, { useEffect, useState } from "react";
// import fetchAllCategories from "../lib/fetchAllCategories";
// import CatalogAllProducts from "./CatalogAllProducts";
// import { Category } from "./types";

// const CatalogAllProductsContainer: React.FC = () => {
//   const [result, setResult] = useState<Category[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const categoriesData = await fetchAllCategories();
//       console.log("categoriesData: ", categoriesData);
//       setResult(categoriesData);
//     };
//     fetchData();
//   }, []);

//   return <CatalogAllProducts categreories={result} />;
// };

// export default CatalogAllProductsContainer;
