import { motion } from "framer-motion";
import { chakra, shouldForwardProp } from "@chakra-ui/react";

// converts non-chakra components to chakra-enabled components
export const StyledMotionDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    const isChakraProp = shouldForwardProp(prop); // chakra ui props
    const motionDivProp = "transition";
    return isChakraProp || motionDivProp;
  },
});

const Section = ({
  children,
  initY = 10,
  duration = 0.8,
  delay = 0,
  mb = 5,
  ...props
}) => (
  <StyledMotionDiv
    initial={{ y: initY, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: duration, delay }} //motion prop
    mb={mb}
    {...props}
  >
    {children}
  </StyledMotionDiv>
);

export default Section;
