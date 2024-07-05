import { getData } from "@/lib/utils";
import CategoryItem from "./CategoryItem";

import Link from "next/link";
import type React from "react";
import { CatalogStatus, CatalogAllProductsProps } from "@/types/index";

const CatalogAllProducts: React.FC<CatalogAllProductsProps> = async ({
  showAll = false,
}) => {
  const data = await getData<CatalogStatus>("categories");

  return (
    <section className='w-full flex flex-col justify-center items-center pt-9 pb-7 px-0.5 gap-[26px] md:gap-8  2xl:gap-9 '>
      <h6>Catalog</h6>
      <ul
        className={`mx-auto grid grid-cols-1 gap-6 h-[970px] md:grid-cols-2 md:gap-x-[30px] md:gap-y-12 md:max-w-[576px] xl:min-w-[1040px] xl:grid-cols-3 xl:gap-x-28 2xl:max-w-[1210px] 2xl:grid-cols-4 2xl:gap-y-10 2xl:gap-x-[30px] ${
          showAll ? "h-auto " : "overflow-hidden  md:h-[668px]"
        }`}
      >
        {(showAll ? data.result : data.result.slice(0, 8)).map((product) => (
          <li className='flex gap-5 w-[278px] h-[310px]' key={product.id}>
            <Link href='/products'>
              <CategoryItem product={product} />
            </Link>
          </li>
        ))}
      </ul>
      {!showAll && (
        <Link
          href='/allcategories'
          className='border border-primary-500 text-primary-500 rounded-[10px] px-7 py-3 flex justify-center text-lg w-[161px] h-[51px] hover:bg-primary-500 hover:text-background-100'
        >
          See more...
        </Link>
      )}
    </section>
  );
};

export default CatalogAllProducts;
