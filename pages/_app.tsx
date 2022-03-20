import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Auth, Typography, Button } from "@supabase/ui";
import { createClient } from "@supabase/supabase-js";
import { QueryClient, QueryClientProvider } from 'react-query'

const supabase = createClient(
  "https://kgjtsfxbuzyozhgmslav.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtnanRzZnhidXp5b3poZ21zbGF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc2MjU3NTEsImV4cCI6MTk2MzIwMTc1MX0.Sslr27JTwldY8xpAvhDH-q1EhTOoUTD4Xai4XUZu_wA"
);

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Auth.UserContextProvider supabaseClient={supabase}>
        <Component {...pageProps} supabaseClient={supabase} />
      </Auth.UserContextProvider>
    </QueryClientProvider>
  )
}

export default MyApp
