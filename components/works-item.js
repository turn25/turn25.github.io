import NextLink from "next/link";
import {
  Box,
  Heading,
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbItem,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

export const WorkBreadCrumb = ({ path, title, year, ...props }) => {
  return (
    <Box {...props}>
      <Breadcrumb separator={<ChevronRightIcon />}>
        <BreadcrumbItem>
          <NextLink href="/">
            <BreadcrumbLink>Home</BreadcrumbLink>
          </NextLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <NextLink href="/works">
            <BreadcrumbLink>Works</BreadcrumbLink>
          </NextLink>
        </BreadcrumbItem>

        <BreadcrumbItem cursor="default">
          <Heading as="h2" fontSize="xl">
            {title}
            <Badge
              ml={1}
              fontSize="xl"
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
