import { Inter } from 'next/font/google';
import Header from './components/Header';
import './globals.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Next JS Demo',
  description: 'Next JS demo and playground for experimentation',
  keywords:
    'web development, web design, javascript, react, node, angular, vue, html, css',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="container">
          {children}
        </main>
      </body>
    </html>
  );
}
