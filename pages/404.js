import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NextLink from "next/link";
import { useRouter } from "next/router";
import {
  Container,
  Center,
  VStack,
  Heading,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { RiHomeFill } from "react-icons/ri";
import Particles from "react-tsparticles";

import Layout from "../components/layouts/layout";

const NotFound = () => {
  const [isShow, setIsShow] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // avoid weird particles scale + position on init
    if (!isShow)
      setTimeout(() => {
        setIsShow(true);
      }, 1400);
  }, []);

  useEffect(() => {
    setIsShow(false);
  }, [router]);

  const particleColor = useColorModeValue("#2D3748", "#fff");

  return (
    <Layout title="Page not found">
      {isShow && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, type: "easeInOut" }}
        >
          <Particles
            options={{
              fps_limit: 60,
              interactivity: {
                detectsOn: "canvas",
                events: {
                  onClick: { enable: true, mode: "push" },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  push: { particles_nb: 4 },
                  repulse: { distance: 100, duration: 0.4 },
                },
              },
              particles: {
                color: particleColor,
                links: {
                  color: particleColor,
                  distance: 150,
                  enable: true,
                  opacity: 0.2,
                  width: 1,
                },
                move: {
                  bounce: false,
                  direction: "none",
                  enable: true,
                  outMode: "out",
                  random: false,
                  speed: 1,
                  straight: false,
                },
                number: {
                  density: { enable: true, area: 800 },
                  value: 60,
                },
                opacity: { value: 0.5 },
                shape: { type: "none" },
                size: {
                  random: true,
                  value: 1,
                },
              },
              detectRetina: true,
            }}
          />
        </motion.div>
      )}

      <Container maxW="container.md" align="center" my={{ base: 6, md: 4 }}>
        <VStack spacing={{ base: 10, md: 12 }}>
          <Heading as="h1" fontSize={{ base: "2.8rem", md: "3rem" }}>
            404 Not Found
          </Heading>

          <Text align="center">
            It&#39;s looked like we donut find what you searched. The page you
            were looking for doesn&#39;t exist, isn&#39;t available or was
            loading incorrectly.
          </Text>

          <Center>
            <NextLink href="/">
              <Button
                leftIcon={<RiHomeFill />}
                colorScheme={useColorModeValue("blue", "gray")}
              >
                Return Home
              </Button>
            </NextLink>
          </Center>
        </VStack>
      </Container>
    </Layout>
  );
};

export default NotFound;
