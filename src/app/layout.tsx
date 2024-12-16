import './style.css';
import './globals.css'; // Tetap gunakan CSS global

import { Roboto } from 'next/font/google';

// Font Google
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata = {
  title: 'Undangan Pernikahan',
  description: 'Undangan Pernikahan Onggi Sanjaya & Silvia Sari',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
