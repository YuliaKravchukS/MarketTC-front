import { Suspense } from 'react';
import Loading from './loading';
import {
  CatalogAllProducts,
  FavoriteProducts,
  HeroSection,
  PromotionalProducts,
} from '@/components/shared';

export default function Home() {
  //   {
  //   searchParams,
  // }: {
  //   searchParams?: { query: string };
  // }
  // const query = searchParams?.query || "";

  return (
    <main className=" max-w-screen-2xl  h-full xl:px-20 2xl:px-[115px]  md:mt-[31px] xl:pt-[32px]  mx-auto  xl:pb-[50px] 2xl:pb-0 ">
      <HeroSection />
      <Suspense fallback={<Loading />}>
        <PromotionalProducts />
        <CatalogAllProducts />
        <FavoriteProducts />
      </Suspense>
    </main>
  );
}
