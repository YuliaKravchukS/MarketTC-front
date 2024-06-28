import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Marketplace Team Challenge',
  description:
    "Marketplace Team Challenge (MTC) - this web application enables users to buy and sell a variety of products through a streamlined platform. Users can create advertisements by providing the name, description, count, and image of the product. Buyers can browse products and view sellers' phone numbers for direct contact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
