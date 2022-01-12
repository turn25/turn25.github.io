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
  const activeBtn = useColorModeValue(
    "0 0 0 3px rgba(10, 125, 230, 0.4)",
    "0 0 0 3px rgba(110, 125, 230, 0.8)"
  );

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
          _focus={{ boxShadow: activeBtn }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default ColorModeToggleButton;
