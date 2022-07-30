// import "../styles/globals.css";

import type { AppProps } from "next/app";

import "../styles/fonts";
import { ChakraProvider } from "@chakra-ui/react";

import themeBase from "../theme/theme_base";
import { ScrollToProvider } from "../context";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={themeBase}>
      <ScrollToProvider>
        <Component {...pageProps} />
      </ScrollToProvider>
    </ChakraProvider>
  );
}

export default MyApp;
