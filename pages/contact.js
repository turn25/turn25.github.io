import {
  Container,
  Center,
  Heading,
  Box,
  Button,
  useToast,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { RiUser3Line, RiMailLine } from "react-icons/ri";

import Layout from "../components/layouts/layout";
import CustomAlertDialog from "../components/custom-alert-dialog";
import CustomInput from "../components/custom-input";
import CustomTextarea from "../components/custom-textarea";
import {
  ProgressBarColor,
  CustomProgressBar,
  ProgressBarValue,
} from "../components/custom-progress-bar";

const Works = () => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bg = useColorModeValue("#ffffff", "gray.700");
  const btnColor = useColorModeValue("blue", "teal");

  const FormSubmitSchema = Yup.object({
    name: Yup.string()
      .min(4, "Too short!")
      .max(40, "Must be 40 characters or less")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    message: Yup.string()
      .min(5, "Too short!")
      .max(500, "Must be 500 characters or less")
      .required("Required"),
  });

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
        <Box
          bg={bg}
          borderRadius="lg"
          shadow="lg"
          py={4}
          px={{ base: 4, md: 8 }}
          opacity="90%"
        >
          {/* Formik */}
          <Formik
            initialValues={{
              name: "",
              email: "",
              message: "",
            }}
            validationSchema={FormSubmitSchema}
            onSubmit={(values, { setSubmitting }) => {
              // handle submit
              setTimeout(() => {
                sendEmail(values);
                // console.log(values);
                setSubmitting(false);
              }, 1000);
            }}
          >
            {(formik) => (
              <Form>
                <CustomInput
                  htmlFor="name"
                  label="Full Name"
                  type="text"
                  id="name"
                  name="name"
                  icon={RiUser3Line}
                  placeholder="Full Name"
                />

                <CustomInput
                  htmlFor="email"
                  label="Your Email"
                  type="email"
                  id="email"
                  name="email"
                  icon={RiMailLine}
                  placeholder="Your Email 123"
                />

                <CustomTextarea
                  htmlFor="message"
                  label="Message"
                  id="message"
                  name="message"
                  placeholder="Message for me!"
                />

                <CustomProgressBar>
                  {!(formik.isValid && formik.dirty) && <ProgressBarColor />}
                  {!formik.errors.name && formik.touched.name && (
                    <ProgressBarValue />
                  )}
                  {!formik.errors.email && formik.touched.email && (
                    <ProgressBarValue />
                  )}
                  {!formik.errors.message && formik.touched.message && (
                    <ProgressBarValue />
                  )}
                </CustomProgressBar>

                <Button
                  onClick={onOpen}
                  isDisabled={!(formik.isValid && formik.dirty)}
                  isLoading={formik.isSubmitting}
                  loadingText="Sending"
                  colorScheme={btnColor}
                  mt={6}
                  mb={2}
                  isFullWidth
                >
                  Send
                </Button>

                <CustomAlertDialog
                  isOpen={isOpen}
                  onClose={onClose}
                  onSubmit={formik.handleSubmit}
                />
              </Form>
            )}
          </Formik>
        </Box>
      </Container>
    </Layout>
  );
};

export default Works;
