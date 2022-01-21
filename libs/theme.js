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

  CloseButton: {
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
};

const fonts = {
  heading: "'Gothic A1'",
};

const colors = {
  violet: {
    50: "#ffd9fe",
    100: "#f0b1ee",
    200: "#d687d4",
    300: "#cf7acc",
    400: "#c76dc4",
    500: "#bd51b9",
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
