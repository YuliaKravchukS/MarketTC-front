import { catalogProducts } from "@/db/catalogProducts";
import CategoryItem from "./CategoryItem";
import { Category, DataProducts } from "./types";

import Link from "next/link";
import type React from "react";

const dataProducts: DataProducts = JSON.parse(JSON.stringify(catalogProducts));

const data: Category[] = dataProducts.categories;
console.log("data: ", data);

export default async function CatalogAllProducts() {
  return (
    <section className='m-auto flex flex-col justify-center items-center pt-9 pb-7 px-0.5 gap-[26px] md:gap-8 md:w-[576px] xl:w-[935px] 2xl:gap-9 2xl:max-w-[1192px]'>
      <h2>Catalog</h2>
      <ul className='block w-full grid grid-cols-1 gap-6 h-[970px] overflow-hidden md:grid-cols-2 md:gap-x-[30px] md:gap-y-12 md:h-[668px] xl:grid-cols-3 2xl:grid-cols-4 2xl:gap-y-10'>
        {data &&
          data
            .map((product: Category) => (
              <li className='flex gap-5 w-full h-[310px]' key={product.id}>
                <CategoryItem product={product} />
              </li>
            ))
            .slice(0, 8)}
      </ul>
      <Link
        href=''
        className='border border-primary-500 text-primary-500 rounded-[10px] px-8 py-3 flex justify-center text-lg w-[163px] h-[51px] tracking-normal hover:bg-primary-500 hover:text-background-100'
      >
        See more...
      </Link>
    </section>
  );
}

// const CatalogAllProducts: React.FC<DataProducts> = ({ result }) => {
//   return (
//     <section className='m-auto flex flex-col justify-center items-center pt-9 pb-7 px-0.5 gap-[26px] md:gap-8 md:w-[576px] xl:w-[935px] 2xl:gap-9 2xl:max-w-[1192px]'>
//       <h2>Catalog</h2>
//       <ul className='block w-full grid grid-cols-1 gap-6 h-[970px] overflow-hidden md:grid-cols-2 md:gap-x-[30px] md:gap-y-12 md:h-[668px] xl:grid-cols-3 2xl:grid-cols-4 2xl:gap-y-10'>
//         {result &&
//           result.slice(0, 8).map((product: Category) => (
//             <li className='flex gap-5 w-full h-[310px]' key={product.id}>
//               <CategoryItem product={product} />
//             </li>
//           ))}
//       </ul>
//       <Link
//         href=''
//         className='border border-primary-500 text-primary-500 rounded-[10px] px-8 py-3 flex justify-center text-lg w-[163px] h-[51px] tracking-normal hover:bg-primary-500 hover:text-background-100'
//       >
//         See more...
//       </Link>
//     </section>
//   );
// };

// export default CatalogAllProducts;
