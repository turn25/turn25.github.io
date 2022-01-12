// Font
import "@fontsource/gothic-a1/400.css";
import "@fontsource/gothic-a1/700.css";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "../libs/theme";

// Layout
import MainLayout from "../components/layouts/main";

function Website({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <MainLayout router={router}>
        <Component {...pageProps} key={router.route} />
      </MainLayout>
    </ChakraProvider>
  );
}

export default Website;
