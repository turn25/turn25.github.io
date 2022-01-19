import NextLink from "next/link";
import {
  chakra,
  Box,
  Text,
  LinkBox,
  Tooltip,
  LinkOverlay,
} from "@chakra-ui/react";
import { motion, useMotionValue, useTransform } from "framer-motion";

import BlurImage from "./blur-image";

const StyledMotion = chakra(motion.div);

const GridItem = ({ id, thumbnail, title, children }) => {
  // framer-motion coordenadas
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [50, -50]);
  const rotateY = useTransform(x, [-100, 100], [-50, 50]);

  return (
    <Tooltip label="Drag Me" placement="top" openDelay={400} closeDelay={200}>
      <Box
        style={{
          perspective: 600,
        }}
      >
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
          <NextLink
            href={{ pathname: "/works/[postId]", query: { postId: id } }}
            passHref
          >
            <LinkBox as="article">
              <BlurImage src={thumbnail} alt={title} />
              <LinkOverlay>
                <Text as="h4" fontSize={[18, 20, 22]}>
                  {title}
                </Text>
              </LinkOverlay>
              <Text fontSize={[12, 14, 16]}>{children}</Text>
            </LinkBox>
          </NextLink>
        </StyledMotion>
      </Box>
    </Tooltip>
  );
};

export default GridItem;
