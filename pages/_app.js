import '../styles/globals.css'
import { Navbar } from '../components/common/Navbar';
import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from 'next-themes';
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());
import ReactDOM from "react-dom";

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
