import CatalogAllProducts from "@/components/CatalogAllProducts";
import React, { Suspense } from "react";
import Loading from "./loading";

const AllCategories: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <CatalogAllProducts showAll />;
    </Suspense>
  );
};

export default AllCategories;
