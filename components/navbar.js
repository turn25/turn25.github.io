import { useState, useRef } from "react";
import {
  Container,
  Box,
  Stack,
  VStack,
  Flex,
  Heading,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  RiHomeLine,
  RiStackLine,
  RiGithubFill,
  RiMailLine,
} from "react-icons/ri";

import Logo from "./logo";
import ColorModeToggleButton from "./color-mode-switcher";
import DrawerToggleButton from "./drawer-toggle-btn";
import { LinkItem, DrawerLinkBtn } from "./link-item";
import CustomLoader from "./custom-loader.js";
import Footer from "./footer";
import Section from "./section";

const Navbar = ({ path }) => {
  const [loader, setLoader] = useState(0);
  const [loaderSpeed, setLoaderSpeed] = useState(1); // drawer loader speed
  const [isSelectLoader, setIsSelectLoader] = useState(false);
  const [isHovered, setHovered] = useState(false); // hover close drawer button
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = useRef();

  const navbarBgColor = useColorModeValue("#ffffff75", "#4a556825");
  const scrollbarThumbBg = useColorModeValue("#00000060", "#ffffff60");

  const handleCloseDrawer = () => {
    setTimeout(() => {
      onClose();
    }, 150); // set delay time
  };

  return (
    <Box
      as="nav"
      position="fixed"
      top="0"
      w="100vw" // overflow is set to "hidden" when open drawer
      bg={navbarBgColor}
      backdropFilter="blur(5px)" // Firefox not supported
      zIndex={10}
    >
      <Container
        maxW="container.lg"
        display="flex"
        minH="64px"
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
          >
            <RiStackLine />
            Works
          </LinkItem>
          <LinkItem
            href="/contact"
            path={path}
            px={2}
            style={{ textDecoration: "none" }}
          >
            <RiMailLine />
            Contact
          </LinkItem>
          <LinkItem
            href="https://github.com/vuquangtuan123"
            path={path}
            target="_blank"
            px={2}
            style={{ textDecoration: "none" }}
          >
            <RiGithubFill />
            My Github
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          {/* Color Mode Toggle Button */}
          <ColorModeToggleButton disabled={isOpen} />

          <IconButton
            aria-label="Drawer Options"
            icon={<DrawerToggleButton isOpen={isOpen} />}
            onClick={() => {
              onOpen();
            }}
            variant="outline"
            ref={btnRef}
            ml={2}
            disabled={isOpen}
          />

          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            initialFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader
                opacity="75%"
                display="flex"
                justifyContent="space-between"
              >
                <ColorModeToggleButton />
                <IconButton
                  aria-label="Close Drawer"
                  icon={<DrawerToggleButton isOpen={isHovered} />}
                  onClick={() => {
                    setHovered(true);
                    setTimeout(() => {
                      onClose();
                      setHovered(false);
                    }, 100);
                  }}
                  variant="ghost"
                  ref={btnRef}
                  width="20px"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                />
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
                <VStack align="stretch" spacing={{ base: 20, md: 24 }}>
                  <Section initY={30} delay={0.1}>
                    <VStack align="stretch" spacing={4} flex={1}>
                      <DrawerLinkBtn
                        href="/"
                        path={path}
                        onClick={handleCloseDrawer}
                        leftIcon={<RiHomeLine />}
                        delay="0.1"
                      >
                        About Me
                      </DrawerLinkBtn>

                      <DrawerLinkBtn
                        href="/works"
                        path={path}
                        onClick={handleCloseDrawer}
                        leftIcon={<RiStackLine />}
                        delay="0.2"
                      >
                        My Works
                      </DrawerLinkBtn>

                      <DrawerLinkBtn
                        href="/contact"
                        path={path}
                        onClick={handleCloseDrawer}
                        leftIcon={<RiMailLine />}
                        delay="0.3"
                      >
                        Contact Me
                      </DrawerLinkBtn>

                      <DrawerLinkBtn
                        href="https://github.com/vuquangtuan123"
                        path={path}
                        onClick={handleCloseDrawer}
                        leftIcon={<RiGithubFill />}
                        target="_blank"
                        delay="0.4"
                      >
                        My Github
                      </DrawerLinkBtn>
                    </VStack>
                  </Section>

                  <CustomLoader
                    loader={loader}
                    setLoader={setLoader}
                    isSelectLoader={isSelectLoader}
                    setIsSelectLoader={setIsSelectLoader}
                    loaderSpeed={loaderSpeed}
                    setLoaderSpeed={setLoaderSpeed}
                    initY={30}
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
      </Container>
    </Box>
  );
};

export default Navbar;
