import {
  Button,
  Icon,
  Text,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { QuestionIcon } from "@chakra-ui/icons";

const HobbyItem = ({ icon, isOpen, onClick, delay = 0, children }) => {
  // text, icon color
  const color = useColorModeValue("#202020", "#f7fafc");
  // button background color
  const bg = useColorModeValue("#fff", undefined);

  return (
    <Tooltip
      label={isOpen ? "Hide" : "Show"}
      aria-label="A tooltip"
      placement="top"
      closeOnClick={false}
    >
      <Button h="56px" color={color} bg={bg} onClick={onClick}>
        <motion.div
          key={isOpen}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay }}
        >
          <Icon as={isOpen ? icon : QuestionIcon} />
          <Text display="flex" justifyContent="center">
            {isOpen && children}
          </Text>
        </motion.div>
      </Button>
    </Tooltip>
  );
};

export default HobbyItem;
