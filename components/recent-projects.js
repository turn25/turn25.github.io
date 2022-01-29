import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import NextLink from "next/link";

import GridItem from "./work-grid-item";

// Data
import WorksPageData from "../data/works-page";

const RecentProjects = () => {
  const recentProjects = WorksPageData.slice(0, 2);

  return (
    <Box>
      <NextLink href="/works">
        <Heading as="h3" variant="section-title" cursor="pointer">
          Recent Projects
        </Heading>
      </NextLink>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} p="1rem">
        {recentProjects.map(({ id, thumbnail, title }, idx) => (
          <GridItem key={idx} id={id} thumbnail={thumbnail} title={title} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default RecentProjects;
