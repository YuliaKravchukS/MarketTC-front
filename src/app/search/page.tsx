import ProductCard from '@/components/ProductCard';
import { getData } from '@/lib/utils';
import { ProductsAllProps, ProductStatus } from '@/types/index';
import Link from 'next/link';
// import { useSearchParams } from 'next/navigation';

import React from 'react';

const SearchResult: React.FC<ProductsAllProps> = async () => {
  //   const searchParams = useSearchParams();
  //   const query = searchParams.get('query')?.toLowerCase() || '';

  const data = await getData<ProductStatus>(`products`);
  console.log('data.result: ', data.result);

  return (
    <section className="w-full flex flex-col justify-center items-center pt-9 pb-7 px-0.5 gap-[26px] md:gap-8  2xl:gap-9 ">
      {/* <ul 
        className={`mx-auto grid grid-cols-1 gap-6 h-auto md:grid-cols-2 md:gap-x-[30px] md:gap-y-12 md:max-w-[576px] xl:min-w-[1040px] xl:grid-cols-3 xl:gap-x-28 2xl:max-w-[1210px] 2xl:grid-cols-4 2xl:gap-y-10 2xl:gap-x-[30px]`}>
        {//data.result &&
        //   data.result
            // .filter((filteredProduct) => filteredProduct.title.toLowerCase().includes(query || ''))
            // .map((product) => (
            //   <li className="flex gap-5 w-[278px] h-[310px]" key={product.id}>
            //     <Link href={`/products/${product.id}`}>
            //       <ProductCard product={product} />
            //     </Link>
            //   </li>
            // ))}
      </ul>*/}
    </section>
  );
};

export default SearchResult;
