import '../styles/globals.css'
import { Navbar } from '../components/common/Navbar';
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return(
    <SessionProvider session={session}>
      <div>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  )
}
