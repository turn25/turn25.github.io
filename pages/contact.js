import {
  chakra,
  shouldForwardProp,
  Container,
  Center,
  Heading,
  Box,
  Button,
  FormControl,
  FormLabel,
  Textarea,
  Input,
  useToast,
  useColorModeValue,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { Form, Formik } from "formik";
import { AnimatePresence, motion } from "framer-motion";
import * as Yup from "yup";

import Layout from "../components/layouts/layout";

const variants = {
  hidden: { opacity: 0, x: -20 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

const StyledP = chakra(motion.p, {
  shouldForwardProp: (prop) => {
    const isChakraProp = shouldForwardProp(prop); // chakra ui props
    const motionProp = "transition";
    return isChakraProp || motionProp;
  },
});

const AnimatedFormErrorMessage = ({ children, ...props }) => {
  const color = useColorModeValue("red.500", "#e879f9");

  return (
    <StyledP
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "easeInOut" }}
      variants={variants}
      color={color}
      mt={1}
      fontSize={14}
      fontWeight="semibold"
      {...props}
    >
      {children}
    </StyledP>
  );
};

const Works = () => {
  const toast = useToast();
  const bg = useColorModeValue("#ffffff", "gray.700");
  const asteriskColor = useColorModeValue("#e53e3e", "#9f7aea");
  const focusBorderColor = useColorModeValue("blue.400", "teal.400");
  const errorBorderColor = useColorModeValue("red.500", "purple.400");
  const scrollbarThumbBg = useColorModeValue("#00000060", "#ffffff60");
  const btnColor = useColorModeValue("blue", "teal");

  const sendEmail = (object) => {
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE,
        object,
        process.env.NEXT_PUBLIC_EMAIL_USER
      )
      .then(
        (result) => {
          // console.log(result);
          toast.closeAll();
          toast({
            title: "Success!",
            status: "success",
            isClosable: true,
          });
        },
        (error) => {
          console.log(error);
          toast.closeAll();
          toast({
            title: "Error!",
            status: "error",
            isClosable: true,
          });
        }
      );
  };

  return (
    <Layout title="Contact">
      <Container maxW="container.sm">
        <Center my={{ base: 6, md: 4 }}>
          <Heading as="h1">Contact Me</Heading>
        </Center>
        <Box bg={bg} borderRadius="lg" shadow="lg" py={4} px={8} opacity="90%">
          {/* Formik */}
          <Formik
            initialValues={{
              name: "",
              email: "",
              message: "",
            }}
            validationSchema={Yup.object({
              name: Yup.string()
                .max(40, "Must be 40 characters or less")
                .required("Required"),
              email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
              message: Yup.string()
                .max(500, "Must be 500 characters or less")
                .required("Required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                sendEmail(values);
                setSubmitting(false);
              }, 1000);
            }}
          >
            {(formik) => (
              <Form>
                <FormControl
                  isInvalid={formik.errors.name && formik.touched.name}
                >
                  <FormLabel htmlFor="name">
                    Full Name
                    <span style={{ color: asteriskColor }}>&nbsp;*</span>
                  </FormLabel>
                  <Input
                    {...formik.getFieldProps("name")} // get name
                    id="name"
                    name="name"
                    placeholder="Your Full Name"
                    focusBorderColor={focusBorderColor}
                    errorBorderColor={errorBorderColor}
                  />

                  <AnimatePresence>
                    {formik.errors.name && formik.touched.name && (
                      <AnimatedFormErrorMessage>
                        {formik.errors.name}
                      </AnimatedFormErrorMessage>
                    )}
                  </AnimatePresence>
                </FormControl>

                <FormControl
                  isInvalid={formik.errors.email && formik.touched.email}
                >
                  <FormLabel htmlFor="email" mt={4}>
                    Email address
                    <span style={{ color: asteriskColor }}>&nbsp;*</span>
                  </FormLabel>
                  <Input
                    {...formik.getFieldProps("email")}
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email address"
                    focusBorderColor={focusBorderColor}
                    errorBorderColor={errorBorderColor}
                  />

                  <AnimatePresence>
                    {formik.errors.email && formik.touched.email && (
                      <AnimatedFormErrorMessage>
                        {formik.errors.email}
                      </AnimatedFormErrorMessage>
                    )}
                  </AnimatePresence>
                </FormControl>

                <FormControl
                  isInvalid={formik.errors.message && formik.touched.message}
                >
                  <FormLabel htmlFor="message" mt={4}>
                    Message
                    <span style={{ color: asteriskColor }}>&nbsp;*</span>
                  </FormLabel>
                  <Textarea
                    {...formik.getFieldProps("message")}
                    id="message"
                    name="message"
                    placeholder="Message for me!"
                    overflow="auto"
                    overflowX="hidden"
                    focusBorderColor={focusBorderColor}
                    errorBorderColor={errorBorderColor}
                    resize="none"
                    css={{
                      "&::-webkit-scrollbar": {
                        width: "6px",
                      },
                      "&::-webkit-scrollbar-thumb": {
                        background: scrollbarThumbBg,
                        borderRadius: "4px",
                      },
                      "&::-webkit-scrollbar-track": {
                        background: "transparent",
                      },
                    }}
                  />

                  <AnimatePresence>
                    {formik.errors.message && formik.touched.message && (
                      <AnimatedFormErrorMessage>
                        {formik.errors.message}
                      </AnimatedFormErrorMessage>
                    )}
                  </AnimatePresence>
                </FormControl>

                <Button
                  type="submit"
                  isDisabled={!(formik.isValid && formik.dirty)}
                  isLoading={formik.isSubmitting}
                  loadingText="Submitting"
                  colorScheme={btnColor}
                  mt={6}
                  mb={2}
                  isFullWidth
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Container>
    </Layout>
  );
};

export default Works;
