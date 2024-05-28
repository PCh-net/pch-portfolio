import { Metadata } from 'next';
import { Russo_One } from 'next/font/google';
import './globals.css';

const russo_one = Russo_One({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'PCh portfolio',
  description: 'Strona główna.',
  applicationName: 'PCh portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={russo_one.className}>{children}</body>
    </html>
  );
}
