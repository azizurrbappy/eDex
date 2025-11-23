import { Public_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/app/pages/Shared/Navbar';

const publicSans = Public_Sans({
  variable: '--font-public-sans',
  subsets: ['latin'],
});

export const metadata = {
  title: 'eDex - Online Course E-Learning Website',
  description: 'Online Course E-Learning Website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${publicSans.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navbar></Navbar>
        <section className="flex-1"></section>
        Footer
      </body>
    </html>
  );
}
