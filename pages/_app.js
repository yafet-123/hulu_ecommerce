import '../styles/globals.css'
import { Navbar } from '../components/common/Navbar';

export default function App({ Component, pageProps: { ...pageProps } }) {
  return(
      <div>
        <Navbar />
        <Component {...pageProps} />
      </div>
  )
}
