import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";

import Navbar from "../navbar";
import Footer from "../footer";

const MainLayout = ({ children, router }) => {
  return (
    <Box as="main" h="100vh" display="flex" flexDir="column">
      <Head>
        {/* meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Tuan's Homepage" />
        <meta name="author" content="Tuan Vu" />
        <meta name="author" content="donut-homepage" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <meta property="og:site_name" content="Tuan Vu's Homepage" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tuan Vu - Homepage" key="title" />
        <title>Tuan Vu - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.sm" pt={14} flex={1}>
        {children}
      </Container>

      <Footer />
    </Box>
  );
};

export default MainLayout;
