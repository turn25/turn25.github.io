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
  Link,
  IconButton,
  ListItem,
  ListIcon,
  useToast,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import {
  ChevronRightIcon,
  LinkIcon,
  InfoIcon,
  CloseIcon,
} from "@chakra-ui/icons";
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

export const FeatureItem = ({
  icon,
  delay = 0,
  source,
  children,
  ...props
}) => {
  const toast = useToast();
  const bg = useColorModeValue("blue.500", "teal.500");

  return (
    <motion.div
      initial={{ y: 15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
    >
      <ListItem fontWeight="semibold">
        <chakra.span
          // toast
          onClick={() => {
            // use uuid to create new id for each toast
            const id = uuidv4();
            toast({
              id,
              position: "bottom",
              render: () => (
                <Box
                  color="white"
                  py={4}
                  px={3}
                  bg={bg}
                  borderRadius="5px"
                  position="relative"
                >
                  <Box align="center" position="relative">
                    <InfoIcon
                      onClick={() => toast.closeAll()}
                      cursor="pointer"
                      position="absolute"
                      top={1}
                      left={2}
                    />
                    <Link
                      href={source}
                      target="_blank"
                      color=""
                      style={{ textDecoration: "none" }}
                    >
                      <Text
                        fontSize={17}
                        align="center"
                        fontWeight="semibold"
                        display="inline"
                      >
                        See demo for more detail
                      </Text>
                    </Link>
                  </Box>
                  <IconButton
                    onClick={() => {
                      toast.close(id);
                    }}
                    aria-label="Close Toast"
                    icon={<CloseIcon />}
                    size="xs"
                    position="absolute"
                    top={1}
                    right={1}
                    variant="ghost"
                    color="#fff"
                    _hover={{ bg: "#dfdfdf40" }}
                    _active={{ bg: "#dfdfdf" }}
                    className="no-translate"
                  />
                </Box>
              ),
            });
          }}
          // styles
          color={useColorModeValue("green.500", "teal.400")}
          _hover={{ color: useColorModeValue("purple", "white") }}
          cursor="pointer"
          backdropFilter="blur(10px)"
          {...props}
        >
          <ListIcon as={icon} />
          <Text display="inline">{children}</Text>
        </chakra.span>
      </ListItem>
    </motion.div>
  );
};

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
