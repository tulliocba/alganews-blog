import "../styles/globals.css";
import type { AppProps } from "next/app";

import { light } from "../styles/theme";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={light}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
