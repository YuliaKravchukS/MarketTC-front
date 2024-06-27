import { catalogProducts } from '@/db/catalogProducts';
import CategoryItem from './CategoryItem';
import { Category, DataProducts } from './types';

const dataProducts: DataProducts = JSON.parse(JSON.stringify(catalogProducts));

const data: Category[] = dataProducts.categories;
console.log('data: ', data);

export default function CatalogAllProducts() {
  return (
    <div className="m-auto flex flex-col justify-center items-center gap-[26px] md:gap-[32px] md:w-[576px] 2xl:gap-[36px] 2xl:w-[1192px]">
      <h2>Catalog</h2>
      <ul className="w-full grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-[30px] md:gap-y-12 2xl:grid-cols-4 2xl:gap-y-10">
        {data.map((product: Category) => (
          <li className="flex gap-5 w-full h-[310px]" key={product.id}>
            <CategoryItem product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}
