import { ThemeProvider } from "next-themes";
import Footer from "../components/Footer";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light">
      <div id="root">
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
