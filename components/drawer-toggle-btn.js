import { motion } from "framer-motion";
import { useColorModeValue } from "@chakra-ui/react";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke={useColorModeValue("#4a5568", "#edf2f7")}
    strokeLinecap="round"
    {...props}
  />
);

const DrawerToggleButton = ({ isOpen }) => (
  <svg width="16" height="16" viewBox="0 0 20 20">
    <Path
      animate={isOpen ? "open" : "closed"}
      variants={{
        closed: { d: "M 2 2.5 L 20 2.5" },
        open: { d: "M 3 16.5 L 17 2.5" },
      }}
    />
    <Path
      animate={isOpen ? "open" : "closed"}
      d="M 2 9.423 L 20 9.423"
      variants={{
        closed: { opacity: 1 },
        open: { opacity: 0 },
      }}
      transition={{ duration: 0.1 }}
    />
    <Path
      animate={isOpen ? "open" : "closed"}
      variants={{
        closed: { d: "M 2 16.346 L 20 16.346" },
        open: { d: "M 3 2.5 L 17 16.346" },
      }}
    />
  </svg>
);

export default DrawerToggleButton;
