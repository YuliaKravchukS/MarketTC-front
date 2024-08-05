import React, { Suspense } from 'react';
import Loading from './loading';
import { CatalogAllProducts } from '@/components/shared';

const AllCategories: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <CatalogAllProducts showAll />;
    </Suspense>
  );
};

export default AllCategories;
