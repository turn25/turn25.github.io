// Font
import "@fontsource/gothic-a1/400.css";
import "@fontsource/gothic-a1/700.css";

import { ChakraProvider } from "@chakra-ui/react";

// Layout
import MainLayout from "../components/layouts/main";
import theme from "../libs/theme";
import { AnimatePresence } from "framer-motion";

// Scrollbar
import CustomScrollbar from "../components/custom-scrollbar";

function Website({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <CustomScrollbar />
      <MainLayout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </MainLayout>
    </ChakraProvider>
  );
}

export default Website;
