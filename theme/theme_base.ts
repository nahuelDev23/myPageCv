import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const themeBase = extendTheme({
  colors: {
    green: {
      500: "#64ffda",
    },
  },
  fonts: {
    body: `"Raleway",sans-serif`,
    firaCode: "Fira Code",
    paraph: `"Raleway",sans-serif`,
  },
  config,
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode("gray.700", "gray.300")(props),
      },
      p: {
        color: mode("#fff", "#000")(props),
      },
    }),
  },
});

export default themeBase;
