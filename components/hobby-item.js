import {
  Button,
  Icon,
  Text,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const HobbyItem = ({ icon, onClick, delay = 0, children }) => {
  // text, icon color
  const color = useColorModeValue("#202020", "#f7fafc");
  // button background color
  const bg = useColorModeValue("#fff", undefined);

  return (
    <Tooltip label="Close" aria-label="A tooltip (Close)" placement="top">
      <Button h="56px" color={color} bg={bg} onClick={onClick}>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay }}
        >
          <Icon as={icon} />
          <Text display="flex" justifyContent="center">
            {children}
          </Text>
        </motion.div>
      </Button>
    </Tooltip>
  );
};

export default HobbyItem;
