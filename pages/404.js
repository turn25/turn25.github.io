import NextLink from "next/link";
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

import Layout from "../components/layouts/layout";

const NotFound = () => {
  return (
    <Layout title="Page not found">
      <Container maxW="container.sm" align="center" my={{ base: 6, md: 4 }}>
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
