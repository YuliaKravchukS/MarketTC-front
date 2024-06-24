import { catalogProducts } from '@/db/catalogProducts';
import CategoryItem from './CategoryItem';
import { Category, DataProducts } from './types';

const dataProducts: DataProducts = JSON.parse(JSON.stringify(catalogProducts));

const data: Category[] = dataProducts.categories;
console.log('data: ', data);

export default function CatalogAllProducts() {
  return (

    <div className='container flex flex-col justify-center items-center gap-[26px]  tablet: gap-[32px] w-[576px] laptop: gap-[36px]'>
      <h2>Catalog</h2>
      <ul className='w-full grid grid-cols-1 gap-6  tablet:grid-cols-2 gap-x-[30px] gap-y-12 laptop:grid-cols-4 gap-y-9'>

        {data.map((product: Category) => (
          <li className='flex gap-5 w-full h-[310px]' key={product.id}>
            <CategoryItem product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}
