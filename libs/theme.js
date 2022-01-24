// theme.js
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  // Customizing global styles
  global: (props) => ({
    body: {
      bg: mode("#f2f1ed", "#202020")(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      "section-title": (props) => ({
        textDecoration: "underline",
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: mode("#1a202c", "#f7fafc90")(props),
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      }),
    },
  },
  // Update base style
  Button: {
    baseStyle: (props) => ({
      color: mode("#3d7aed", "#ff7acc")(props),
      // outline
      _focus: {
        boxShadow: mode(
          "0 0 0 3px rgba(10, 125, 230, 0.6)",
          "0 0 0 3px rgba(160, 125, 230, 0.6)"
        )(props),
      },
    }),

    // override existing variants
    variants: {
      ghost: (props) => ({
        color: mode("#3d7aed", "#ff7acc")(props),
      }),

      // Icon Button
      navBtn: (props) => ({
        color: "#f7fafc",
        bg: mode("blue.400", "gray.400")(props),
        borderRadius: "100px",
        opacity: "75%",

        _focus: {
          boxShadow: "",
        },
        _hover: {
          bg: mode("blue.600", "gray.600")(props),
        },
        _active: {
          bg: mode("blue.800", "gray.800")(props),
        },
      }),

      // Icon Button
      toastBtn: {
        color: "#f7fafc",
        _hover: { bg: "#dfdfdf40" },
        _active: { bg: "#dfdfdf" },
        _focus: {
          boxShadow: "",
        },
      },
    },
  },

  Link: {
    baseStyle: (props) => ({
      color: mode("#3d7aed", "#ff7acc")(props),
      // outline
      _focus: {
        boxShadow: mode(
          "0 0 0 3px rgba(10, 125, 230, 0.6)",
          "0 0 0 3px rgba(160, 125, 230, 0.6)"
        )(props),
      },
    }),
  },

  Image: {
    baseStyle: (props) => ({
      _focus: {
        boxShaboxShadow: mode(
          "0 0 0 3px rgba(10, 125, 230, 0.6)",
          "0 0 0 3px rgba(160, 125, 230, 0.6)"
        )(props),
      },
    }),
  },

  BreadcrumbLink: {
    baseStyle: (props) => ({
      color: mode("#3d7aed", "#ff7acc")(props),
    }),
  },
};

const fonts = {
  heading: "'Gothic A1'",
};

const colors = {
  violet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
  },
  fushsia: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
  },
};

const config = {
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  styles,
  components,
  fonts,
  colors,
});

export default theme;
