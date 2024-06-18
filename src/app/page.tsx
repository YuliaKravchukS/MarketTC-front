import CatalogAllProducts from '@/components/CatalogAllProducts';
import FavoriteProducts from '@/components/FavoriteProducts';

export default function Home() {
  return (
    <main className=" desktop:max-w-[1440px] laptop:max-w-full h-full desktop:px-[120px]  laptop:px-[40px] tablet:px-[10px]  mx-auto ">
      <CatalogAllProducts />

      <FavoriteProducts />
    </main>
  );
}
