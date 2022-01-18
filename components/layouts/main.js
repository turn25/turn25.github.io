import { useState, useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { Box, Container } from "@chakra-ui/react";
import { motion } from "framer-motion";

import Navbar from "../navbar";
import Footer from "../footer";
import CustomParticles from "../custom-particles";
import DonutLoader from "../donut-loader";

const LazyDonutLoading = dynamic(() => import("../donut-model"), {
  ssr: false,
  loading: () => <DonutLoader />,
});

const MainLayout = ({ children, router }) => {
  const [isShow, setIsShow] = useState(false);
  const path = router.asPath;

  useEffect(() => {
    if (path === "/") setIsShow(false);
    else if (!isShow) setIsShow(true);
  }, [path]);

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

      {isShow && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, type: "easeInOut", delay: 1 }} // set delay time to avoid weird particles scale + position on init (404 page)
          style={{ zIndex: "-1" }} // override tsParicles.js z-index (0 !important)
        >
          <CustomParticles />
        </motion.div>
      )}

      <Navbar path={path} />

      <Container
        maxW="container.md"
        w="auto"
        mt={10}
        flex={1}
        display="flex"
        flexDir="column"
      >
        <LazyDonutLoading />
        <Box zIndex={1}>{children}</Box>
      </Container>

      <Footer />
    </Box>
  );
};

export default MainLayout;
