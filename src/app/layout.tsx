import type { Metadata } from 'next';
import './globals.css';
import Header from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { getHeaderData } from './api/Header';
import { PlusJakartaSans } from './fonts';

export const metadata: Metadata = {
  title: 'Usługi zeliwne',
  description: 'Odnów swój kaloryfer z nami! ;)',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = await getHeaderData();
  return (
    <html lang='en'>
      <body className={PlusJakartaSans.className}>
        <Header categories={categories} />
        {children}
        <Footer categories={categories} />
      </body>
    </html>
  );
}
