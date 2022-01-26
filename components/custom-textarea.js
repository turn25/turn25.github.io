import {
  Icon,
  FormControl,
  FormLabel,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import { useField } from "formik";
import { AnimatePresence } from "framer-motion";
import { CheckIcon } from "@chakra-ui/icons";

import CustomLabelAsterisk from "./custom-asterisk";
import AnimatedFormErrorMessage from "./form-error-message";

const CustomTextarea = ({ htmlFor, label, placeholder, ...props }) => {
  const [field, meta] = useField(props);
  const focusBorderColor = useColorModeValue("blue.400", "teal.400");
  const errorBorderColor = useColorModeValue("red.500", "rose.500");
  const scrollbarThumbBg = useColorModeValue("#00000060", "#ffffff60");
  const checkColor = useColorModeValue("green.500", "lime.400");

  const error = () => {
    return meta.error && meta.touched;
  };

  return (
    <FormControl isInvalid={error()} h={32} mb={2} position="relative">
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

      <Icon
        as={CheckIcon}
        w={3.5}
        h={3.5}
        position="absolute"
        right="8px"
        top="50%"
        color={checkColor}
        opacity={!meta.error && meta.touched ? 1 : 0}
        transition="opacity 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.05s"
        pointerEvents="none"
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
