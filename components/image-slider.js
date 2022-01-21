import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import {
  IconButton,
  Box,
  Image,
  HStack,
  useColorModeValue,
  useDisclosure,
  Tooltip,
} from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { AiFillEye } from "react-icons/ai";

import ImageDrawer from "./image-drawer";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 240 : -240,
      opacity: 0,
      scale: 1.25,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? -240 : -240,
      opacity: 0,
      scale: 1.25,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export const ImageSlider = ({ images, title, ...props }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bg = useColorModeValue("blackAlpha.600", "whiteAlpha.800");
  const color = useColorModeValue("#4fb9ff", "#ff7acc");

  // find current image index
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <Box my={10} {...props}>
      <AnimatePresence initial={false} custom={direction}>
        <Box
          display="flex"
          position="relative"
          justifyContent="center"
          alignItems="center"
        >
          {/* position absolute = 0 height */}
          <Box w="100%" h="300px" />
          <motion.img
            key={page}
            src={images[imageIndex]}
            alt={`${title} Picture ${imageIndex + 1}`}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 240, damping: 30 },
              scale: { type: "spring", stiffness: 15, damping: 5 },
              opacity: { duration: 0.2 },
            }}
            drag={images.length > 1 && "x"} // only drag when array have more than 1 item
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.4}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            whileTap={{ scale: 1.15 }}
            style={{
              position: "absolute",
              borderRadius: "20px",
              boxShadow: "3px 6px 25px #80808030",
            }}
          />

          {images.length > 1 && (
            <Box h={10} w="auto">
              <IconButton
                onClick={() => paginate(-1)}
                aria-label="Swipe Right"
                icon={<ArrowLeftIcon />}
                variant="navBtn"
                zIndex={10}
                position="absolute"
                left={3}
              />
              <IconButton
                onClick={() => paginate(1)}
                aria-label="Swipe Right"
                icon={<ArrowRightIcon />}
                variant="navBtn"
                zIndex={10}
                position="absolute"
                right={3}
              />
            </Box>
          )}
        </Box>
      </AnimatePresence>
      <HStack
        display="flex"
        justifyContent="center"
        alignItems="center"
        spacing="16px"
        mt={10}
      >
        {images.map((image, idx) => (
          <Tooltip
            key={image}
            label="Zoom In"
            aria-label="A tooltip"
            placement="top"
            isDisabled={idx !== imageIndex}
          >
            <IconButton
              onClick={() => {
                idx === imageIndex && onOpen();
              }}
              aria-label="Indicator"
              icon={
                idx === imageIndex && (
                  <AiFillEye
                    style={{
                      fontSize: "16px",
                    }}
                  />
                )
              }
              color={color}
              isRound
              size="xs"
              bg={bg}
              opacity={idx === imageIndex ? 1 : 0.3}
              transition="opacity 300ms ease-in-out"
              boxShadow="2px 4px 14px #80808060"
              _hover={{ bg: bg }}
              _active={{ bg: bg }}
              _focus={{ boxShadow: "" }}
            />
          </Tooltip>
        ))}
      </HStack>
      <ImageDrawer
        src={images[imageIndex]}
        title={`${title} Picture ${imageIndex + 1}`}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Box>
  );
};
