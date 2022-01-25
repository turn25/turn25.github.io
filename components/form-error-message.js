import { chakra, shouldForwardProp, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

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
  const color = useColorModeValue("red.500", "fushsia.400");

  return (
    <StyledP
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "easeInOut" }}
      variants={variants}
      color={color}
      mt={2}
      fontSize={14}
      fontWeight="semibold"
      {...props}
    >
      {children}
    </StyledP>
  );
};

export default AnimatedFormErrorMessage;
