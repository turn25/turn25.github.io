// theme.js
import { extendTheme, ModalHeader } from "@chakra-ui/react";
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
      "section-title": {
        textDecoration: "underline",
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: "#505050",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  // Update base style
  Button: {
    baseStyle: (props) => ({
      color: mode("#3d7aed", "#ff63c3")(props),
    }),
  },
  Link: {
    baseStyle: (props) => ({
      color: mode("#3d7aed", "#ff63c3")(props),
    }),
  },
};

const fonts = {
  heading: "'Gothic A1'",
};

const colors = {
  violet: "#c76dc4",
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: "true",
};

const theme = extendTheme({
  config,
  styles,
  components,
  fonts,
  colors,
});

export default theme;
