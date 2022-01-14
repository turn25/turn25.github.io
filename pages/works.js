import { Container, Center, Heading } from "@chakra-ui/react";
import Layout from "../components/layouts/layout";

const Works = () => {
  return (
    <Layout title="My Works">
      <Container maxW="container.md">
        <Center my={{ base: 6, md: 4 }}>
          <Heading as="h1">Works</Heading>
        </Center>
      </Container>
    </Layout>
  );
};

export default Works;
