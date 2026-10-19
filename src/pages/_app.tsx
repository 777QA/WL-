import type { AppProps } from 'next/app';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
