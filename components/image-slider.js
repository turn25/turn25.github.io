import { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import {
  IconButton,
  Box,
  Image,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { AiFillEye } from "react-icons/ai";

import GlobalContext from "../context/global-context";
import ImageModal from "./image-modal";

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
  const { isOpen, onOpen, onClose } = useContext(GlobalContext); // use global context

  const bg = useColorModeValue("blackAlpha.600", "whiteAlpha.800");
  const color = useColorModeValue("#4fb9ff", "#ff7acc");

  // We paginate the images absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
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
          <Image
            src={images[0]}
            alt="placeholder"
            style={{ display: "block", opacity: 0, zIndex: -1000 }}
          />
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
          <IconButton
            onClick={() => {
              idx === imageIndex && onOpen();
            }}
            key={image}
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
        ))}
      </HStack>
      <ImageModal
        src={images[imageIndex]}
        title={title}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Box>
  );
};
