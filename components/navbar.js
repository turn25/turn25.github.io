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
import { HamburgerIcon } from "@chakra-ui/icons";
import { RiHomeLine, RiStackLine, RiGithubFill } from "react-icons/ri";

import Logo from "./logo";
import ColorModeToggleButton from "./color-mode-switcher";
import LinkItem from "./link-item";
import CustomLoader from "./custom-loader.js";
import Footer from "./footer";

const Navbar = ({ path }) => {
  const [currLoader, setCurrLoader] = useState(0);
  const [isSelectLoader, setIsSelectLoader] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const activeNavBar = useColorModeValue(
    "0 0 0 3px rgba(10, 125, 230, 0.6)",
    "0 0 0 3px rgba(160, 125, 230, 0.6)"
  );
  const navbarBgColor = useColorModeValue("#ffffff60", "#20202080");

  return (
    <Box
      as="nav"
      position="fixed"
      w="100vw"
      h="60px"
      bg={navbarBgColor}
      backdropFilter="blur(6px)"
      z-index={10}
    >
      <Container
        maxW="container.lg"
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="between"
        p={3}
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
          width="auto"
          align="center"
          flexGrow={1}
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
          <ColorModeToggleButton />

          <Box ml={2} display="inline-flex">
            <Box>
              <IconButton
                aria-label="Drawer Options"
                icon={<HamburgerIcon />}
                variant="outline"
                onClick={onOpen}
                ref={btnRef}
                _focus={{ boxShadow: activeNavBar }}
              />

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

                  <DrawerBody mt={10}>
                    <VStack align="stretch" spacing={32}>
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
