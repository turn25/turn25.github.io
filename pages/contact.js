import { Container, Center, Heading, Box } from "@chakra-ui/react";
import Layout from "../components/layouts/layout";

const Works = () => {
  return (
    <Layout title="Contact Me">
      <Container maxW="container.sm">
        <Center my={{ base: 6, md: 4 }}>
          <Heading as="h1">Contact</Heading>
        </Center>
      </Container>
    </Layout>
  );
};

export default Works;
