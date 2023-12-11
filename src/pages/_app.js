import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { ThemeProvider } from "next-themes";
import MainLayout from "../../components/MainLayout";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider forcedTheme={Component.theme || null}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
}
