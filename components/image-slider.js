import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import {
  chakra,
  IconButton,
  Box,
  Image,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";

import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { AiFillEye } from "react-icons/ai";

const StyledBox = chakra(motion.div);

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? -200 : -200,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export const ImageSlider = ({ images, title }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  // zoom in image
  const [isZoom, setIsZoom] = useState(false);

  const bg = useColorModeValue("blackAlpha.600", "whiteAlpha.800");
  const color = useColorModeValue("#4fb6ff", "#ff7acc");

  // We paginate the images absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const toggleZoom = () => {
    setTimeout(() => {
      setIsZoom(true);
    }, 150);
  };

  return (
    <Box>
      {isZoom && (
        <Box
          onClick={() => {
            setIsZoom(false);
          }}
          position="fixed"
          top="0"
          bottom="0"
          left="0"
          right="0"
          bg="#000"
          opacity={0.8}
          zIndex="0"
        />
      )}
      <AnimatePresence initial={false} custom={direction}>
        <StyledBox
          h="100%"
          display="flex"
          position="relative"
          justifyContent="center"
          alignItems="center"
          zIndex={1}
          animate={{ scale: isZoom ? 1.9 : 1 }}
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
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag={images.length > 1 && "x"} // only drag when array have more than 1 item
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            whileTap={{ scale: 1.15 }}
            onDoubleClick={() => {
              !isZoom && toggleZoom();
            }}
            style={{
              position: "absolute",
              borderRadius: "20px",
              boxShadow: "4px 8px 25px #80808060",
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
        </StyledBox>
      </AnimatePresence>
      <HStack
        display="flex"
        justifyContent="center"
        alignItems="center"
        spacing="16px"
        mt={5}
      >
        {images.map((image, idx) => (
          <IconButton
            key={image}
            onClick={() => {
              idx === imageIndex && toggleZoom();
            }}
            aria-label="Indicator"
            icon={
              idx === imageIndex && <AiFillEye style={{ fontSize: "16px" }} />
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
    </Box>
  );
};
