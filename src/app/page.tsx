import CatalogAllProducts from "@/components/CatalogAllProducts";
import FavoriteProducts from "@/components/FavoriteProducts";
import HeroSection from "@/components/HeroSection";
import PromotionalProducts from "@/components/PromotionalProducts";

export default function Home() {
  return (
    <main className=" max-w-screen-2xl  h-full xl:px-20 2xl:px-[115px]  md:mt-[31px] xl:pt-[32px]  mx-auto  xl:pb-[50px] 2xl:pb-0 ">
      <HeroSection />
      <PromotionalProducts />
      <CatalogAllProducts />
      <FavoriteProducts />
    </main>
  );
}
