import { motion } from "framer-motion";
import { chakra, shouldForwardProp } from "@chakra-ui/react";

// converts non-chakra components to chakra-enabled components => can pass style props to them.
// const StyledDiv = chakra(motion.div, {
//   shouldForwardProp: (prop) => {
//     return shouldForwardProp(prop) || prop === "transition";
//   },
// });

const Section = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay }}
    mb={6}
  >
    {children}
  </motion.div>
);

export default Section;
