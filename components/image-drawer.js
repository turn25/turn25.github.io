import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerBody,
  IconButton,
  Text,
  Image,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import DrawerToggleButton from "./drawer-toggle-btn";
import Footer from "./footer";

const ImageDrawer = ({ src, title, isOpen, onClose }) => {
  const [isHovered, setHovered] = useState(false);

  const bg = useColorModeValue("#f2f1ed", "#202020");
  const imageShadow = `0 0 12px ${useColorModeValue("#00000030", "#ffffff20")}`;
  const scrollbarThumbBg = useColorModeValue("#00000060", "#ffffff60");

  return (
    <Drawer isOpen={isOpen} onClose={onClose} size="full" placement="bottom">
      <DrawerContent bg={bg}>
        <DrawerHeader
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mx={4}
        >
          <Text fontSize={["md", "lg", "xl"]}>{title}</Text>

          <IconButton
            aria-label="Close Drawer"
            icon={<DrawerToggleButton isOpen={isHovered} />}
            onClick={() => {
              setHovered(true);
              setTimeout(() => {
                onClose();
                setHovered(false);
              }, 100);
            }}
            variant="ghost"
            width="20px"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          />
        </DrawerHeader>
        <DrawerBody
          display="flex"
          justifyContent="center"
          alignItems="center"
          flex={1}
          //override custom scrollbar
          overflow="overlay" //overlay scrollbar, not consume space
          css={{
            "&::-webkit-scrollbar": {
              width: "9px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: scrollbarThumbBg,
              border: "3px solid transparent",
              backgroundClip: "padding-box",
            },
            "&::-webkit-scrollbar-track": {
              background: "transparent",
            },
          }}
        >
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 1.075 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            style={{ position: "relative" }}
          >
            <Image
              src={src}
              alt={title}
              borderRadius={10}
              w={["90vw", "80vw"]}
              h="auto"
              shadow={imageShadow}
            />
            <Link href={src} target="_blank">
              <IconButton
                icon={<ExternalLinkIcon />}
                position="absolute"
                bottom={2}
                right={2}
              />
            </Link>
          </motion.div>
        </DrawerBody>
        <DrawerFooter
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Footer />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ImageDrawer;
