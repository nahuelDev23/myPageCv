import "../styles/globals.css";

import type { AppProps } from "next/app";

import "../styles/fonts";
import { ChakraProvider } from "@chakra-ui/react";

import themeBase from "../theme/theme_base";
import { ScrollToProvider, TransitionProvider } from "../context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={themeBase}>
      <TransitionProvider>
        <ScrollToProvider>
          <Component {...pageProps} />
        </ScrollToProvider>
      </TransitionProvider>
    </ChakraProvider>
  );
}

export default MyApp;
