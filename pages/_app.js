import { ThemeProvider } from "next-themes";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light">
      <div id="root">
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
