import { Container, Center, Heading, Box } from "@chakra-ui/react";
import Layout from "../components/layouts/layout";
import Image from "next/image";
import WorksPageData from "../data/works-page";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const Works = () => {
  const { images } = WorksPageData[5];
  const a = images[0];

  return (
    <Layout title="Contact Me">
      <Container maxW="container.sm">
        <Center my={{ base: 6, md: 4 }}>
          <Heading as="h1">Contact</Heading>
        </Center>
        <Image
          src={a}
          alt="Picture of the author"
          width="100vw"
          height="100%"
          layout="responsive"
          objectFit="contain"
        />
        <Container
          position="absolute"
          top={0}
          bottom={0}
          left={0}
          right={0}
          w="container.lg"
        >
          <Image
            src={a}
            alt="Picture of the author"
            layout="fill"
            objectFit="contain"
          />
        </Container>
      </Container>
    </Layout>
  );
};

export default Works;
