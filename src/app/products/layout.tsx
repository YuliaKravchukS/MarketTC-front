import HeroSection from "@/components/HeroSection";
import PromotionalProducts from "@/components/PromotionalProducts";

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeroSection />
      {children}
      <PromotionalProducts />
    </>
  );
}
