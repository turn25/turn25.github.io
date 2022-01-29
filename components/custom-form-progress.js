import { Box, HStack, useColorModeValue } from "@chakra-ui/react";

import { StyledMotionDiv } from "./section";

export const FormProgressWrapper = ({ children, ...props }) => {
  return (
    <HStack
      position="relative"
      display="flex"
      w="100%"
      h="18px"
      mt={6}
      spacing={{ base: 3, md: 6 }}
      {...props}
    >
      {children}
    </HStack>
  );
};

export const FormProgress = ({ ...props }) => {
  const bg = useColorModeValue("gray.100", "gray.600");
  return (
    <Box
      bg={bg}
      w="100%"
      h="100%"
      borderRadius={5}
      overflow="hidden"
      {...props}
    />
  );
};

const variants = {
  hidden: { x: "-100%" },
  enter: { x: 0 },
  exit: { x: "-100%" },
};

export const FormProgressValue = ({ ...props }) => {
  const bg = useColorModeValue("blue.400", "teal.400");
  const hoverBg = useColorModeValue("blue.500", "teal.500");

  return (
    <StyledMotionDiv
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "easeIn", duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.5 }}
      variants={variants}
      h="100%"
      w="100%"
      bg={bg}
      _hover={{ bg: hoverBg }}
      {...props}
    />
  );
};
