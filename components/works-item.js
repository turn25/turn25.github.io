import NextLink from "next/link";
import {
  chakra,
  Box,
  Heading,
  Text,
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbItem,
  Badge,
  Image,
  Icon,
  IconButton,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ChevronRightIcon, LinkIcon } from "@chakra-ui/icons";
import { RiHomeLine } from "react-icons/ri";

import ImageDrawer from "./image-drawer";

const StyledDiv = chakra(motion.div);

const variants = {
  offscreen: {
    y: 20,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 25,
      duration: 0.8,
    },
  },
};

export const WorkBreadCrumb = ({ path, title, year, ...props }) => {
  return (
    <Box align="center" {...props}>
      <Breadcrumb
        separator={<ChevronRightIcon opacity={0.5} />}
        spacing={{ base: 0, md: 2 }}
      >
        <BreadcrumbItem>
          <NextLink href="/">
            <BreadcrumbLink
              opacity={0.5}
              transition="opacity 200ms ease-in"
              _hover={{ opacity: 1 }}
            >
              <Icon as={RiHomeLine} mb={["-2px", null, "-3.4px"]} />
            </BreadcrumbLink>
          </NextLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <NextLink href="/works">
            <BreadcrumbLink
              opacity={0.5}
              _hover={{ opacity: 1 }}
              transition="opacity 200ms ease-in"
              style={{ textDecoration: "none" }}
            >
              Works
            </BreadcrumbLink>
          </NextLink>
        </BreadcrumbItem>

        <BreadcrumbItem cursor="default">
          <Heading as="h2" fontSize={{ base: "lg", sm: "xl" }}>
            {title}
            <Badge
              ml={1}
              fontSize={{ base: "md", sm: "xl" }}
              colorScheme={useColorModeValue("cyan", "purple")}
              borderRadius="md"
            >
              {year}
            </Badge>
          </Heading>
        </BreadcrumbItem>
      </Breadcrumb>
    </Box>
  );
};

export const MetaTag = ({ children }) => (
  <Badge colorScheme={useColorModeValue("green", "teal")} mr={2}>
    {children}
  </Badge>
);

export const WorkImage = ({ src, alt, id, ...props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <StyledDiv
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }} // intersectionobserve threshhold
      variants={variants}
      // styles
      bg={useColorModeValue("#f7fafc90", "#1a202c90")}
      backdropFilter="blur(5px)"
      borderRadius="lg"
      w="full"
      my={6}
      position="relative"
      shadow="1px 2px 12px 2px #00000050"
      {...props}
    >
      <Image
        src={src}
        alt={alt}
        borderTopRadius="lg"
        borderBottomRadius="base"
      />
      <Text
        textAlign="center"
        p={2}
        fontSize={[16, null, 18]}
        fontWeight="semibold"
      >
        {alt}
      </Text>
      <IconButton
        onClick={onOpen}
        aria-label="Zoom In Image"
        icon={<LinkIcon />}
        variant="ghost"
        position="absolute"
        right={0.5}
        bottom={0.5}
        _hover={{ bg: "" }}
        _active={{ bg: "" }}
      />
      <ImageDrawer src={src} title={alt} isOpen={isOpen} onClose={onClose} />
    </StyledDiv>
  );
};
