import {
  Container,
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
import { AnimatePresence } from "framer-motion";

import Layout from "../components/layouts/layout";
import Section from "../components/section";
import CustomAlertDialog from "../components/custom-alert-dialog";
import CustomInput from "../components/custom-input";
import CustomTextarea from "../components/custom-textarea";
import {
  FormProgressWrapper,
  FormProgress,
  FormProgressValue,
} from "../components/custom-form-progress";
import RecentProjects from "../components/recent-projects";

const Works = () => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bg = useColorModeValue("#ffffff", "gray.700");
  const boxBg = useColorModeValue("whiteAlpha.600", "whiteAlpha.200");
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
        <Box
          p={3}
          borderRadius={10}
          align="center"
          my={{ base: 6, md: 4 }}
          bg={boxBg}
          fontSize={[18, 20, 22]}
          boxShadow="sm"
          backdropFilter="blur(5px)"
        >
          Contact Me
        </Box>

        <Section delay={0.1} my={8}>
          <Heading variant="section-title">Form</Heading>
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

                  <FormProgressWrapper>
                    <FormProgress>
                      <AnimatePresence initial={false}>
                        {!formik.errors.name && formik.touched.name && (
                          <FormProgressValue />
                        )}
                      </AnimatePresence>
                    </FormProgress>

                    <FormProgress>
                      <AnimatePresence>
                        {!formik.errors.email && formik.touched.email && (
                          <FormProgressValue />
                        )}
                      </AnimatePresence>
                    </FormProgress>
                    <FormProgress>
                      {!formik.errors.message && formik.touched.message && (
                        <FormProgressValue />
                      )}
                    </FormProgress>
                  </FormProgressWrapper>

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
        </Section>

        <Section delay={0.2}>
          <RecentProjects />
        </Section>
      </Container>
    </Layout>
  );
};

export default Works;
