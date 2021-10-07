import "../styles/globals.css";
import type { AppProps as NexAppProps } from "next/app";
import Error from "next/error";

import { light } from "../styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/globalStyles";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Content } from "../components/Content";

interface CustomAppProps extends NextPageProps {}

type AppProps<T = any> = {
  pageProps: T;
} & Omit<NexAppProps<T>, "pageProps">;

function MyApp({ Component, pageProps }: AppProps<CustomAppProps>) {
  return (
    <ThemeProvider theme={light}>
      <Header />
      <Content>
        {pageProps.error ? (
          <Error
            statusCode={pageProps.error.statusCode}
            title={pageProps.error.message}
          />
        ) : (
          <Component {...pageProps} />
        )}
      </Content>
      <Footer />
      <GlobalStyles />
    </ThemeProvider>
  );
}
export default MyApp;
