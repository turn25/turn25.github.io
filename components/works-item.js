import NextLink from "next/link";
import {
  Box,
  Heading,
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbItem,
  Badge,
  Icon,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { RiHomeLine } from "react-icons/ri";

export const WorkBreadCrumb = ({ path, title, year, ...props }) => {
  return (
    <Box {...props}>
      <Breadcrumb separator={<ChevronRightIcon />} spacing={{ base: 0, md: 2 }}>
        <BreadcrumbItem>
          <NextLink href="/">
            <BreadcrumbLink display="flex" alignItems="flex-end">
              <Icon as={RiHomeLine} fontSize="20px" />
            </BreadcrumbLink>
          </NextLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <NextLink href="/works">
            <BreadcrumbLink>Works</BreadcrumbLink>
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

export const WorkImage = ({ src, alt, ...props }) => (
  <Image
    borderRadius="lg"
    w="full"
    src={src}
    alt={alt}
    my={6}
    shadow="1px 2px 12px 2px #00000050"
    {...props}
  />
);
