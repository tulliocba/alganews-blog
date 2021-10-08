import "../styles/globals.css";
import type { AppProps as NexAppProps } from "next/app";
import Error from "next/error";

import { light } from "../styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/globalStyles";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Content } from "../components/Content";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

interface CustomAppProps extends NextPageProps {}

type AppProps<T = any> = {
  pageProps: T;
} & Omit<NexAppProps<T>, "pageProps">;

const progess = new ProgressBar({
  size: 2,
  color: light.primaryBackground,
  delay: 100,
});

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

Router.events.on("routeChangeStart", progess.start);
Router.events.on("routeChangeComplete", progess.finish);
Router.events.on("routeChangeError", progess.finish);

export default MyApp;
