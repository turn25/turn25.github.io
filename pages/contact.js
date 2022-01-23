import {
  Container,
  Center,
  Heading,
  Box,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Textarea,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";

import Layout from "../components/layouts/layout";

const Works = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE,
        e.target,
        process.env.NEXT_PUBLIC_EMAIL_USER
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Layout title="Contact">
      <Container maxW="container.sm">
        <Center my={{ base: 6, md: 4 }}>
          <Heading as="h1">Contact</Heading>
        </Center>
        <Box
          bg={useColorModeValue("#ffffff", "gray.800")}
          borderRadius="md"
          py={4}
          px={8}
          opacity="90%"
        >
          <form onSubmit={sendEmail}>
            <FormControl>
              <FormLabel htmlFor="name" mt={4}>
                Your name
              </FormLabel>
              <Input id="name" name="name" placeholder="Your name" />

              <FormLabel htmlFor="email" mt={4}>
                Email address
              </FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Email address"
              />
              <FormErrorMessage>Email is required.</FormErrorMessage>

              <FormLabel htmlFor="message" mt={4}>
                Message
              </FormLabel>
              <Textarea
                id="message"
                name="message"
                placeholder="Message for me!"
              />

              <Button
                type="submit"
                // isLoading
                loadingText="Submitting"
                colorScheme={useColorModeValue("blue", "teal")}
                mt={4}
                w="full"
              >
                Submit
              </Button>
            </FormControl>
          </form>
        </Box>
      </Container>
    </Layout>
  );
};

export default Works;
