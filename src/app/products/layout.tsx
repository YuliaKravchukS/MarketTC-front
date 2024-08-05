import { HeroSection, PromotionalProducts } from '@/components/shared';

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
