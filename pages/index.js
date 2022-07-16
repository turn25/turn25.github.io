import NextLink from "next/link";
import {
  chakra,
  Container,
  Box,
  Center,
  Heading,
  Text,
  Button,
  Image,
  Link,
  List,
  ListItem,
  Tooltip,
  SimpleGrid,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  RiMusic2Fill,
  RiGameFill,
  RiTwitterFill,
  RiGithubFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";
import { AiFillRead } from "react-icons/ai";
import { MdMovieFilter } from "react-icons/md";
import { GiDonut } from "react-icons/gi";
import { FaGuitar } from "react-icons/fa";

import WavingHandEmoji from "../components/hand-emoji";
import TypeWritter from "../components/typewriter";
import Section from "../components/section";
import { Paragraph } from "../components/paragraph";
import {
  EducationSection,
  EducationYear,
} from "../components/education-section";
import HobbyItem from "../components/hobby-item";
import Layout from "../components/layouts/layout";
import RecentProjects from "../components/recent-projects";

const StyledBox = chakra(motion.div);

const Page = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [animate, cycle] = useCycle(
    { scale: 1, rotate: 0 },
    { scale: 1.1, rotate: 360 }
  );

  const boxBg = useColorModeValue("whiteAlpha.600", "whiteAlpha.200");
  const avatarBorderColor = useColorModeValue(
    "whiteAlpha.900",
    "whiteAlpha.800"
  );
  const avatarImg = `/images/profile-picture${useColorModeValue(
    "",
    "-dark"
  )}.png`;

  const buttonColorScheme = useColorModeValue("blue", "gray");

  return (
    <Container maxW="container.sm">
      <Layout>
        <Box
          p={3}
          my={{ base: 6, md: 4 }}
          borderRadius={10}
          display="flex"
          justifyContent="center"
          alignItems="center"
          fontSize={[18, 20, 22]}
          bg={boxBg}
          boxShadow="sm"
          backdropFilter="blur(5px)"
        >
          <Text>Hello, I&#39;m Tuan&nbsp;</Text>
          <WavingHandEmoji>👋</WavingHandEmoji>
        </Box>
        {/* Name */}
        <Box
          display={{ md: "flex" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Box flex={1}>
            <Heading as="h2">Tuan Vu</Heading>

            {/* Disable Google Translate (can't remove text) */}
            <TypeWritter className="notranslate" />
          </Box>

          <StyledBox
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
            animate={animate}
            onTap={cycle}
            whileTap={{ scale: 1.1 }}
          >
            <Tooltip label="Click Me" aria-label="A tooltip" placement="top">
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
            </Tooltip>
          </StyledBox>
        </Box>
        {/* Section */}
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About Me
          </Heading>

          <Paragraph>
            I&apos;m a front-end web developer based in Vietnam. I love modern
            Javascript library, framework like{" "}
            <Link href="https://www.reactjs.org" target="_blank">
              React
            </Link>
            {`, `}
            <Link href="https://reactnative.dev" target="_blank">
              React Native
            </Link>
            {`, `}
            <Link href="https://vuejs.org" target="_blank">
              Vue.js
            </Link>
            . Experience in building cross-browser, mobile compatible with
            responsive design.
          </Paragraph>

          <Center my={5}>
            <NextLink href="/works">
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme={buttonColorScheme}
              >
                My Porfolio
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
            University of Information Technology
          </EducationSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Web
          </Heading>

          <List>
            <ListItem>
              <Link
                href="https://github.com/turn25"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <Button
                  leftIcon={<RiGithubFill />}
                  variant="ghost"
                  colorScheme={useColorModeValue("blue", "gray")} // color.200
                >
                  turn25
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link
                href="https://twitter.com/tuanv234"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <Button
                  leftIcon={<RiTwitterFill />}
                  variant="ghost"
                  colorScheme={useColorModeValue("blue", "gray")} // color.200
                >
                  @tuanv234
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link
                href="https://www.linkedin.com/in/tuan-vu-46a06922a/"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <Button
                  leftIcon={<RiLinkedinBoxFill />}
                  variant="ghost"
                  colorScheme={useColorModeValue("blue", "gray")} // color.200
                >
                  Tuan Vu
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Hobby
          </Heading>

          <AnimatePresence exitBeforeEnter initial={false}>
            <SimpleGrid
              columns={[1, 2, 3]}
              spacingX="25px"
              spacingY="15px"
              p="1rem"
            >
              <HobbyItem
                icon={MdMovieFilter}
                isOpen={isOpen}
                onClick={onToggle}
                delay={0}
              >
                Anime
              </HobbyItem>
              <HobbyItem
                icon={AiFillRead}
                isOpen={isOpen}
                onClick={onToggle}
                delay={0.1}
              >
                Manga
              </HobbyItem>
              <HobbyItem
                icon={RiMusic2Fill}
                isOpen={isOpen}
                onClick={onToggle}
                delay={0.2}
              >
                Music
              </HobbyItem>
              <HobbyItem
                icon={GiDonut}
                isOpen={isOpen}
                onClick={onToggle}
                delay={0.3}
              >
                3D Render
              </HobbyItem>
              <HobbyItem
                icon={RiGameFill}
                isOpen={isOpen}
                onClick={onToggle}
                delay={0.4}
              >
                Video Game
              </HobbyItem>
              <HobbyItem
                icon={FaGuitar}
                isOpen={isOpen}
                onClick={onToggle}
                delay={0.5}
              >
                Playing Guitar
              </HobbyItem>
            </SimpleGrid>
          </AnimatePresence>
        </Section>

        <Section delay={0.5}>
          <RecentProjects />
        </Section>

        <Section delay={0.6}>
          <Heading as="h3" variant="section-title">
            Contact
          </Heading>

          <Center my={5}>
            <NextLink href="/contact">
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme={buttonColorScheme}
              >
                Get in Touch
              </Button>
            </NextLink>
          </Center>
        </Section>
      </Layout>
    </Container>
  );
};

export default Page;
