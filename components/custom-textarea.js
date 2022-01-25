import {
  FormControl,
  FormLabel,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import { useField } from "formik";
import { AnimatePresence } from "framer-motion";

import CustomLabelAsterisk from "./custom-asterisk";
import AnimatedFormErrorMessage from "./form-error-message";

const CustomTextarea = ({ htmlFor, label, placeholder, ...props }) => {
  const [field, meta] = useField(props);
  const focusBorderColor = useColorModeValue("blue.400", "teal.400");
  const errorBorderColor = useColorModeValue("red.500", "purple.400");
  const scrollbarThumbBg = useColorModeValue("#00000060", "#ffffff60");

  const error = () => {
    return meta.error && meta.touched;
  };

  return (
    <FormControl isInvalid={error()} h={32} mb={2}>
      <FormLabel htmlFor={htmlFor} mt={4}>
        {label}
        <CustomLabelAsterisk />
      </FormLabel>
      <Textarea
        id={props.id}
        name={props.name}
        placeholder={placeholder}
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
        {...field}
        {...props}
      />

      <AnimatePresence>
        {error() && (
          <AnimatedFormErrorMessage>{meta.error}</AnimatedFormErrorMessage>
        )}
      </AnimatePresence>
    </FormControl>
  );
};

export default CustomTextarea;
