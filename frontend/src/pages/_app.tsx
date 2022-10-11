import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </>
    </QueryClientProvider>
  );
}

export default MyApp;
