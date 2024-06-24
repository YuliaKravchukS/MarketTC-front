import { catalogProducts } from '@/db/catalogProducts';
import CategoryItem from './CategoryItem';
import { Category, DataProducts } from './types';

const dataProducts: DataProducts = JSON.parse(JSON.stringify(catalogProducts));

const data: Category[] = dataProducts.categories;
console.log('data: ', data);

export default function CatalogAllProducts() {
  return (
    <div className=" flex flex-col justify-center items-center gap-[26px] md:gap-[36px]">
      <h6>Catalog</h6>
      <ul className="w-full grid grid-cols-1 gap-6 md:grid-cols-4 gap-x-6 gap-y-6">
        {data.map((product: Category) => (
          <li className="flex  gap-5 w-full h-[310px]" key={product.id}>
            <CategoryItem product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}
