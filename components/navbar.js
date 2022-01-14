import { useState, useRef } from "react";
import NextLink from "next/link";
import {
  Container,
  Box,
  Stack,
  VStack,
  Flex,
  Heading,
  Button,
  IconButton,
  Link,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { HamburgerIcon } from "@chakra-ui/icons";
import { RiHomeLine, RiStackLine, RiGithubFill } from "react-icons/ri";

import Logo from "./logo";
import ColorModeToggleButton from "./color-mode-switcher";
import LinkItem from "./link-item";
import CustomLoader from "./custom-loader.js";
import Footer from "./footer";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

const Navbar = ({ path }) => {
  const [currLoader, setCurrLoader] = useState(0);
  const [isSelectLoader, setIsSelectLoader] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const activeNavBar = useColorModeValue(
    "0 0 0 3px rgba(10, 125, 230, 0.6)",
    "0 0 0 3px rgba(160, 125, 230, 0.6)"
  );
  const navbarBgColor = useColorModeValue("#ffffff75", "#4a556825");
  const scrollbarThumbBg = useColorModeValue("#00000060", "#ffffff60");

  return (
    <Box
      as="nav"
      position="fixed"
      w="100vw"
      h="64px"
      bg={navbarBgColor}
      backdropFilter="blur(5px)"
      zIndex={10}
    >
      <Container
        maxW="container.lg"
        display="flex"
        height="100%"
        alignItems="center"
        px={4}
      >
        {/* Logo */}
        <Flex align="center" justify="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing="tight">
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: ":column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          flex={1}
          align="center"
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem
            href="/works"
            path={path}
            px={2}
            style={{ textDecoration: "none" }}
            _focus={{ boxShadow: activeNavBar }}
          >
            <RiStackLine />
            Works
          </LinkItem>
          <LinkItem
            href="https://github.com/vuquangtuan123"
            path={path}
            target="_blank"
            px={2}
            style={{ textDecoration: "none" }}
            _focus={{ boxShadow: activeNavBar }}
          >
            <RiGithubFill />
            My Github
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          {/* Color Mode Toggle Button */}
          <AnimatePresence exitBeforeEnter initial={false}>
            <motion.span
              key={isOpen}
              initial="hidden"
              animate="enter"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.5, type: "easeInOut" }}
            >
              {!isOpen && <ColorModeToggleButton />}
            </motion.span>
          </AnimatePresence>
          <Box ml={2} display="inline-flex">
            <Box>
              <AnimatePresence exitBeforeEnter initial={false}>
                <motion.span
                  key={isOpen}
                  initial="hidden"
                  animate="enter"
                  exit="exit"
                  variants={variants}
                  transition={{ duration: 0.5, delay: 0.05, type: "easeInOut" }}
                >
                  {!isOpen && (
                    <IconButton
                      aria-label="Drawer Options"
                      icon={<HamburgerIcon />}
                      variant="outline"
                      onClick={onOpen}
                      ref={btnRef}
                      _focus={{ boxShadow: activeNavBar }}
                    />
                  )}
                </motion.span>
              </AnimatePresence>

              <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
              >
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton
                    _focus={{ boxShadow: activeNavBar }}
                    zIndex={10}
                  />
                  <DrawerHeader opacity="75%">
                    <ColorModeToggleButton />
                  </DrawerHeader>

                  <DrawerBody
                    mt={10}
                    //override custom scrollbar
                    overflow="overlay" //overlay scrollbar, not consume space
                    css={{
                      "&::-webkit-scrollbar": {
                        width: "9px",
                      },
                      "&::-webkit-scrollbar-thumb": {
                        background: scrollbarThumbBg,
                        border: "3px solid transparent",
                        backgroundClip: "padding-box",
                      },
                      "&::-webkit-scrollbar-track": {
                        background: "transparent",
                      },
                    }}
                  >
                    <VStack align="stretch" spacing={28}>
                      <VStack align="stretch" spacing={4} flex={1}>
                        <NextLink href="/" passHref>
                          <Button
                            as={Link}
                            onClick={onClose}
                            leftIcon={<RiHomeLine />}
                            _focus={{ boxShadow: activeNavBar }}
                          >
                            About
                          </Button>
                        </NextLink>
                        <NextLink href="/works" passHref>
                          <Button
                            as={Link}
                            onClick={onClose}
                            leftIcon={<RiStackLine />}
                            _focus={{ boxShadow: activeNavBar }}
                          >
                            Works
                          </Button>
                        </NextLink>

                        <Button
                          as={Link}
                          onClick={onClose}
                          leftIcon={<RiGithubFill />}
                          href="https://github.com/vuquangtuan123"
                          _focus={{ boxShadow: activeNavBar }}
                        >
                          My Github
                        </Button>
                      </VStack>
                      <CustomLoader
                        activeNavBar={activeNavBar}
                        currLoader={currLoader}
                        setCurrLoader={setCurrLoader}
                        isSelectLoader={isSelectLoader}
                        setIsSelectLoader={setIsSelectLoader}
                      />
                    </VStack>
                  </DrawerBody>

                  <DrawerFooter
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Footer />
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
