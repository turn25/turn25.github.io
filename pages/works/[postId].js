import {
  Container,
  Box,
  List,
  ListItem,
  Link,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { ExternalLinkIcon, Search2Icon } from "@chakra-ui/icons";
import { IoRocket } from "react-icons/io5";

import Layout from "../../components/layouts/layout";
import {
  WorkBreadCrumb,
  MetaTag,
  WorkImage,
} from "../../components/works-item";
import Paragraph from "../../components/paragraph";
import { ImageSlider } from "../../components/image-slider";
import Section from "../../components/section";

// Data
import WorksPageData from "../../data/works-page";

const Post = ({ post }) => {
  const boxBg = useColorModeValue("whiteAlpha.600", "whiteAlpha.200");
  const iconColor = useColorModeValue("#3d7aed", "#ff7acc");

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
          <Section delay={0.1} mb={0}>
            {liveDemo && (
              <ListItem>
                <MetaTag>Live Demo</MetaTag>
                <Link href={liveDemo} target="_blank">
                  {liveDemo}
                  <Icon as={IoRocket} mx="2px" />
                </Link>
              </ListItem>
            )}
          </Section>

          <Section delay={0.2} mb={0}>
            {source && (
              <ListItem>
                <MetaTag>Source</MetaTag>
                <Link href={source} target="_blank">
                  {source} <ExternalLinkIcon mx="2px" mt="-4px" />
                </Link>
              </ListItem>
            )}
          </Section>

          <Section delay={0.3} mb={0}>
            {builtWith && (
              <ListItem>
                <MetaTag>Build With</MetaTag>
                {/* check if don't have destination => don't display as link */}
                {builtWith.map(({ name, destination }, idx) => {
                  const isLastItem = builtWith.length - 1 - idx === 0; // the last item in array will return true
                  if (destination)
                    return (
                      <span key={idx}>
                        <Link href={destination} target="_blank">
                          {name}{" "}
                        </Link>
                        {!isLastItem && ", "}
                        {isLastItem && (
                          <Search2Icon mx="2px" mt="-4px" color={iconColor} />
                        )}
                      </span>
                    );
                  else return <span key={idx}>{name},&nbsp;</span>;
                })}
              </ListItem>
            )}
          </Section>
        </List>

        <Section delay={0.4} mb={0}>
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
                alt={`${title} Image ${idx + 1}`}
                display={{ base: "block", xl: "none" }}
              />
            ))}
        </Section>
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
