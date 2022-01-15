import { AnimatePresence, motion } from "framer-motion";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const variants = {
  hidden: { opacity: 0, x: 10 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

const ColorModeToggleButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const icon = useColorModeValue(<MoonIcon />, <SunIcon />);
  const colorSchemeValue = useColorModeValue("purple", "orange");

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        key={colorMode}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.3 }}
        style={{ display: "inline-block" }}
      >
        <IconButton
          aria-label={`Toggle ${colorMode === "light" ? "Dark" : "Light"} Mode`}
          colorScheme={colorSchemeValue}
          icon={icon}
          onClick={toggleColorMode}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default ColorModeToggleButton;
