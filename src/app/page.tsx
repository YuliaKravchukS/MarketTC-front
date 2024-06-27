import CatalogAllProducts from '@/components/CatalogAllProducts';
import FavoriteProducts from '@/components/FavoriteProducts';
import PromotionalProducts from '@/components/PromotionalProducts';

export default function Home() {
  return (
    <main className=" max-w-screen-2xl  h-full 2xl:px-[120px]    mx-auto  ">
      <PromotionalProducts />
      <CatalogAllProducts />
      <FavoriteProducts />
    </main>
  );
}
