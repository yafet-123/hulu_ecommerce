import '../styles/globals.css'
import { Navbar } from '../components/common/Navbar';
import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return(
    <SessionProvider session={session}>
      <ThemeProvider enableSystem={true} attribute="class">
        <div>
          <Navbar />
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </SessionProvider>
  )
}
