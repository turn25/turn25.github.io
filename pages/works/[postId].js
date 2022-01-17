import {
  Container,
  Box,
  List,
  ListItem,
  Link,
  Icon,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { AiFillEye } from "react-icons/ai";

import Layout from "../../components/layouts/layout";
import {
  WorkBreadCrumb,
  MetaTag,
  WorkImage,
} from "../../components/works-item";
import Paragraph from "../../components/paragraph";
import { ImageSlider } from "../../components/image-slider";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { IoRocket } from "react-icons/io5";

// Data
import WorksPageData from "../../data/works-page";

const Post = ({ post }) => {
  const bg = useColorModeValue("blackAlpha.600", "whiteAlpha.800");
  const color = useColorModeValue("#4fb6ff", "#ff7acc");
  const boxBg = useColorModeValue("whiteAlpha.600", "whiteAlpha.200");

  const {
    id: path,
    title,
    description,
    images,
    createdYear: year,
    liveDemo,
    source,
    builtWith,
  } = post;

  return (
    <Layout title={post.title}>
      <Container as="article" maxW="container.sm">
        <Box
          py={3}
          px={6}
          my={{ base: 6, md: 4 }}
          borderRadius={10}
          fontSize={[18, 20, 22]}
          bg={boxBg}
          boxShadow="sm"
          backdropFilter="blur(5px)"
        >
          <WorkBreadCrumb path={path} title={title} year={year} />
        </Box>

        <Paragraph>{description}</Paragraph>

        <List my={4} spacing={2}>
          {liveDemo && (
            <ListItem>
              <MetaTag>Live Demo</MetaTag>
              <Link href={liveDemo} target="_blank">
                {liveDemo}
                <Icon as={IoRocket} mx="2px" />
              </Link>
            </ListItem>
          )}

          {source && (
            <ListItem>
              <MetaTag>Source</MetaTag>
              <Link href={source} target="_blank">
                {source} <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
          )}
          {builtWith && (
            <ListItem>
              <MetaTag>Build With</MetaTag>
              {/* check if don't have destination => don't display as link */}
              {builtWith.map(({ name, destination }, id) => {
                if (destination)
                  return (
                    <span key={id}>
                      <Link href={destination} target="_blank">
                        {name}
                      </Link>
                      ,&nbsp;
                    </span>
                  );
                else return <span key={id}>{name},&nbsp;</span>;
              })}
            </ListItem>
          )}
        </List>

        {/* display all existed images */}
        {images && (
          <ImageSlider
            images={images}
            title={title}
            display={{ base: "none", xl: "block" }}
          />
        )}

        {/* mobile view */}
        {images &&
          images.map((image, idx) => (
            <WorkImage
              key={idx}
              src={image}
              alt={`${title} + Image + ${idx + 1}`}
              display={{ base: "block", xl: "none" }}
            />
          ))}

        <Box display={{ base: "none", xl: "block" }}>
          <MetaTag>Note</MetaTag>
          <Paragraph alignItems="center" fontWeight="semibold">
            Double click on the image or Click on the
            <IconButton
              aria-label="Indicator"
              icon={<AiFillEye style={{ fontSize: "16px" }} />}
              isRound
              color={color}
              bg={bg}
              size="xs"
              mx={2}
              _hover={{ bg: bg }}
              _active={{ bg: bg }}
              _focus={{ boxShadow: "" }}
            />
            to zoom in
          </Paragraph>
        </Box>
      </Container>
    </Layout>
  );
};

export default Post;

export async function getStaticPaths() {
  const posts = WorksPageData;
  // get all paths
  const paths = posts.map((post) => ({
    params: { postId: post.id }, // paths: [{ params: {...} }]
  }));

  return {
    paths,
    fallback: false, // 404 page
  };
}

export async function getStaticProps({ params }) {
  const { postId } = params; // get postId from params
  const post = WorksPageData.find((data) => data.id === postId); //get data from matched url path

  return {
    props: { post },
  };
}
