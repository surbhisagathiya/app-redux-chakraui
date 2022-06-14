import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
});
const colors = {
  brand: {
    100: "#f7fafc",
    900: "#1a202c",
  },
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  components: {
    Button: {
      // baseStyle: { width: "100%" },
      sizes: {
        sm: {
          fontSize: "md",
        },
      },
      variants: {
        base: {
          bg: "blue.400",
          fontSize: "md",
        },
        sm: {
          bg: "orange.200",
          fontSize: "lg",
        },
        md: {
          bg: "green.200",
          fontSize: "xl",
        },
      },
    },
  },
  // styles: {
  //   global: {
  //     body: {
  //       bg: "gray.100",
  //       color: "black",
  //     },
  //     a: {
  //       color: "teal.500",
  //       _hover: {
  //         textDecoration: "underline",
  //       },
  //     },
  //   },
  // },
  breakpoints,
  config,
  colors,
});

export default theme;
