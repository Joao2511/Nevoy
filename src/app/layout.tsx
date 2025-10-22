import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Inter } from 'next/font/google';
import './globals.css';

const readexPro = localFont({
  src: [
    { path: './fonts/ReadexPro-Light.ttf', weight: '300', style: 'normal' },
    { path: './fonts/ReadexPro-Medium.ttf', weight: '500', style: 'normal' },
    { path: './fonts/ReadexPro-Bold.ttf', weight: '700', style: 'normal' },
  ],
  variable: '--font-readex',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nevoy – Inovação, Automação e Escala',
  description: 'Transformamos tecnologia em resultados tangíveis.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${readexPro.variable} ${inter.variable}`}>
      <body className="bg-black font-[var(--font-inter)] text-white antialiased">{children}</body>
    </html>
  );
}
