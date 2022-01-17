import { motion, useMotionValue, useTransform } from "framer-motion";
import { Container, Image } from "@chakra-ui/react";

const width = 576; //size
const padding = 15;

export const ImageIndicators = ({ images, title }) => {
  const scrollY = useMotionValue(0);

  return (
    <motion.div
      style={{
        height: "100%",
        borderRadius: 20,
        overflow: "hidden",
        cursor: "grab",
      }}
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        style={{
          display: "flex",
          width: getWidth(images),
          // width: "auto",
          height: "auto",
        }}
        drag="x"
        dragConstraints={{
          // drag to l-r direction
          left: -getWidth(images) + width, //size
          right: 0,
        }}
      >
        {images.map((image, idx) => {
          return (
            <Image
              key={idx}
              w="36rem"
              src={image}
              alt={`${title} Image ${idx + 1}`}
              pointerEvents="none"
              borderRadius="20px"
              mr={idx !== images.length - 1 ? padding : 0}
            />
          );
        })}
      </motion.div>
    </motion.div>
  );
};

const getWidth = (item) => {
  const totalWidth = item.length * width;
  const totalPadding = (item.length - 1) * padding;
  const totalScroll = totalWidth + totalPadding;
  return totalScroll;
};
