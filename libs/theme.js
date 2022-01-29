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
      "post-title": (props) => ({
        color: mode("blue.500", "rose.500")(props),
      }),
    },
  },
  // Update base style
  Button: {
    baseStyle: (props) => ({
      color: mode("blue.500", "pink.400")(props),
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
        color: mode("indigo.500", "teal.300")(props),
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
      color: mode("blue.500", "pink.400")(props),
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
};

const fonts = {
  heading: "'Gothic A1'",
};

const colors = {
  // Tailwind Color
  lime: {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314",
  },
  indigo: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
  },
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
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
  },
  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
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
