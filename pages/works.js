import {
  Container,
  Box,
  Heading,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";

import Layout from "../components/layouts/layout";
import Section from "../components/section";
import GridItem from "../components/work-grid-item";

// Data
import WorksPageData from "../data/works-page";

const Works = () => {
  const boxBg = useColorModeValue("whiteAlpha.600", "whiteAlpha.200");

  return (
    <Layout title="My Works">
      <Container maxW="container.md">
        <Box
          p={3}
          borderRadius={10}
          align="center"
          my={{ base: 6, md: 4 }}
          bg={boxBg}
          fontSize={[18, 20, 22]}
          boxShadow="sm"
          backdropFilter="blur(5px)"
        >
          Projects that i have built
        </Box>
        <Heading as="h2" mb={4} variant="section-title">
          Works
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} p="1rem">
          {WorksPageData.map(
            ({ id, thumbnail, title, description }, numberId) => (
              <Section key={numberId} delay={numberId / 10}>
                <GridItem id={id} thumbnail={thumbnail} title={title}>
                  {description}
                </GridItem>
              </Section>
            )
          )}
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
