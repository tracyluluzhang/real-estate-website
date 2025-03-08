import './globals.css';
import { Playfair_Display, Montserrat, Cormorant_Garamond } from 'next/font/google';
import Navbar from './components/Navbar';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
});

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export const metadata = {
  title: 'Dream Estates',
  description: 'Your trusted partner in real estate',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable} ${cormorant.variable}`}>
      <body className="font-montserrat">
        <Navbar />
        {children}
      </body>
    </html>
  );
}