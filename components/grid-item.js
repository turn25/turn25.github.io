import NextImage from "next/image";
import NextLink from "next/link";
import { chakra, Text, LinkBox, Tooltip, LinkOverlay } from "@chakra-ui/react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const StyledImage = chakra(NextImage);
const StyledMotion = chakra(motion.div);

const GridItem = ({ id, thumbnail, title, children }) => {
  // framer-motion coordenadas
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [50, -50]);
  const rotateY = useTransform(x, [-100, 100], [-50, 50]);

  return (
    <Tooltip label="Drag Me" placement="top" openDelay={400} closeDelay={200}>
      <StyledMotion
        w="100%"
        align="center"
        cursor="pointer"
        style={{ x, y, rotateX, rotateY }}
        drag
        dragElastic={0.15}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileDrag={{ cursor: "grabbing" }}
        whileHover={{ scale: 0.95 }}
      >
        <NextLink href={`/work/${id}`} passHref>
          <LinkBox as="article">
            <StyledImage
              src={thumbnail}
              alt={title}
              placeholder="blue"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkaP1fDwAEFgIFdzq/mQAAAABJRU5ErkJggg=="
              borderRadius={10}
            />
            <LinkOverlay>
              <Text as="h4" fontSize={[18, 20, 22]}>
                {title}
              </Text>
            </LinkOverlay>
            <Text fontSize={[12, 14, 16]}>{children}</Text>
          </LinkBox>
        </NextLink>
      </StyledMotion>
    </Tooltip>
  );
};

export default GridItem;
