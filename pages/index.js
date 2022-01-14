import NextLink from "next/link";
import {
  Container,
  Box,
  Center,
  Heading,
  Button,
  Image,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

import TypeWritter from "../components/typewriter";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import {
  EducationSection,
  EducationYear,
} from "../components/education-section";
import Layout from "../components/layouts/layout";

const Page = () => {
  const boxBg = useColorModeValue("whiteAlpha.600", "whiteAlpha.200");
  const avatarBorderColor = useColorModeValue(
    "whiteAlpha.900",
    "whiteAlpha.800"
  );
  const avatarImg = `/images/profile-picture${useColorModeValue(
    "",
    "-dark"
  )}.png`;

  return (
    <Container maxW="container.md">
      <Layout>
        <Box
          p={3}
          my={{ base: 6, md: 4 }}
          borderRadius={8}
          textAlign="center"
          fontSize={[18, 20, 22]}
          bg={boxBg}
          boxShadow="sm"
        >
          Hello, I&#39;m Tuan 👋
        </Box>

        {/* Name */}
        <Box
          display={{ md: "flex" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Box flex={1}>
            <Heading as="h2">Tuan Vu</Heading>

            <TypeWritter />
          </Box>
          <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
            <Image
              src={avatarImg}
              alt="Profile Picture"
              borderRadius="full"
              borderWidth={2}
              borderStyle="solid"
              borderColor={avatarBorderColor}
              boxSize="100px"
              display="inline-block"
            />
          </Box>
        </Box>

        {/* Section */}
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About Me
          </Heading>
          <Paragraph>
            I&#39;m a college student and a front-end web developer. Currently,
            I&#39;m studying at University of Information Technology&nbsp;
            <Link href="https://www.uit.edu.vn/">(UIT)</Link>.
          </Paragraph>

          <Center my={5}>
            <NextLink href="/works">
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme={useColorModeValue("blue", "gray")}
              >
                My Works
              </Button>
            </NextLink>
          </Center>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Education
          </Heading>
          <EducationSection>
            <EducationYear>2007</EducationYear>
            Lê Đình Chinh Primary School
          </EducationSection>
          <EducationSection>
            <EducationYear>2012</EducationYear>
            Diên Hồng Junior High School
          </EducationSection>
          <EducationSection>
            <EducationYear>2016</EducationYear>
            Nguyễn Khuyến High School
          </EducationSection>
          <EducationSection>
            <EducationYear>2019</EducationYear>
            Started studying at UIT.
          </EducationSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Hobbies
          </Heading>
          <Paragraph>Anime, Manga, Music, Video Game, Guitar.</Paragraph>
        </Section>
      </Layout>
    </Container>
  );
};

export default Page;
