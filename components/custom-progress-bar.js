import { Box, useColorModeValue } from "@chakra-ui/react";

export const CustomProgressBar = ({ children, ...props }) => {
  return (
    <Box
      position="relative"
      display="flex"
      w="100%"
      h="18px"
      bg="transparent"
      mt={5}
      borderRadius={5}
      border="2px solid transaprent"
      overflow="hidden"
      zIndex={1}
      {...props}
    >
      {children}
    </Box>
  );
};

export const ProgressBarColor = ({ ...props }) => {
  const bg = useColorModeValue("red.400", "pink.500");
  return (
    <Box
      position="absolute"
      left={0}
      right={0}
      top={0}
      bottom={0}
      bg={bg}
      zIndex={-2}
      {...props}
    />
  );
};

export const ProgressBarValue = ({ ...props }) => {
  const bg = useColorModeValue("blue.400", "teal.400");
  return <Box h="100%" w="calc(100% / 3)" bg={bg} zIndex={-1} {...props} />;
};
