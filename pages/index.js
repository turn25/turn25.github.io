import {
  Container,
  Box,
  Heading,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

import TypeWritter from "../components/typewriter";

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
    <Container maxW="container.sm">
      <Box
        p={3}
        my={{ base: 6, md: 4 }}
        borderRadius={8}
        textAlign="center"
        fontSize={[18, 20, 22]}
        bg={boxBg}
        boxShadow="sm"
      >
        Hello, I&#39;m Tuan
      </Box>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2">Tuan Vu</Heading>

          <Box display="flex" width="fit-content">
            <Text>I&#39;m a&nbsp;</Text>
            <TypeWritter />
          </Box>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            // src="/images/profile_picture.png"
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
    </Container>
  );
};

export default Page;
