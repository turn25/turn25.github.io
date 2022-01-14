import { motion } from "framer-motion";
import { chakra, shouldForwardProp } from "@chakra-ui/react";

// converts non-chakra components to chakra-enabled components
const StyledMotionDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    const isChakraProp = shouldForwardProp(prop); // chakra ui props
    const motionDivProp = "transition";
    return isChakraProp || motionDivProp;
  },
});

const Section = ({ children, delay = 0 }) => (
  <StyledMotionDiv
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay }} //motion prop
    mb={5}
  >
    {children}
  </StyledMotionDiv>
);

export default Section;
