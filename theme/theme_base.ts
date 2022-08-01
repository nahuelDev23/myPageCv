import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const primaryColor = "#64ffda";

export const secondaryDarkColor = "gray.700";

export const navyShadow = "rgba(2,12,27,0.7)";
const themeBase = extendTheme({
  colors: {
    green: {
      500: primaryColor,
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
        bg: mode("gray.300", secondaryDarkColor)(props),
      },
      p: {
        color: mode("#000", "#fff")(props),
      },
    }),
  },
  components: {
    Heading: {
      sizes: {
        xxlH3: {
          fontSize: "2xl",
        },
        mdH4: {
          fontSize: "24px",
        },
      },
    },
  },
});

export default themeBase;
