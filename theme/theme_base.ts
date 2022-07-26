import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
const config: ThemeConfig = {
  initialColorMode: "dark",
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
        bg: mode("gray.300", "gray.700")(props),
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
      },
    },
  },
});

export default themeBase;
