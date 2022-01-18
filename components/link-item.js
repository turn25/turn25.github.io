import NextLink from "next/link";
import { Button, Link, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";

const Wrapper = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::after {
    content: "";
    height: 2px;
    background: ${(props) => props.underlineBgColor};
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;

    /* before hover */
    opacity: 1;
    transform: scaleX(0);
    transform-origin: left center; /* transform: start from left */
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.05s;
  }
  &:hover::after {
    opacity: 1;
    transform: scaleX(1);
  }
`;

export const LinkItem = ({ href, path, children, target, ...props }) => {
  const isActive = path === href; //current path = href
  // text, icon color
  const activeColor = useColorModeValue("#f7fafc", "#202020");
  const inactiveColor = useColorModeValue("blackAlpha.900", "whiteAlpha.900");
  // bg color
  const navbarColor = useColorModeValue("blue.400", "violet.400");
  const hoverActiveBgColor = useColorModeValue("blue.500", "violet.500");
  // underline color
  const underlineBgColor = useColorModeValue("#1a202c", "#f7fafc");
  const activeUnderlineBgColor = useColorModeValue("#f7fafc", "#1a202c");

  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={isActive ? navbarColor : undefined}
        color={isActive ? activeColor : inactiveColor}
        target={target}
        borderRadius="sm"
        _hover={{
          background: isActive ? hoverActiveBgColor : undefined,
        }}
        _active={{
          background: isActive ? hoverActiveBgColor : undefined,
        }}
        transition="all 500ms ease-in-out"
        {...props} //other props
      >
        <Wrapper
          underlineBgColor={
            isActive ? activeUnderlineBgColor : underlineBgColor
          }
          style={{ gap: 5 }}
        >
          {children}
        </Wrapper>
      </Link>
    </NextLink>
  );
};

export const DrawerLinkBtn = ({
  href,
  path,
  children,
  onClick,
  leftIcon,
  target,
  delay = 0,
  ...props
}) => {
  const isActive = path === href; //current path = href
  // bg color
  const activeBgColor = useColorModeValue("blue.400", "violet.400");
  const hoverActiveBgColor = useColorModeValue("blue.500", "violet.500");
  const hoverInactiveBgColor = useColorModeValue("gray.200", "gray.600");

  return (
    <NextLink href={href} passHref>
      <motion.li
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.5 }}
        transition={{
          scale: { type: "spring", stiffness: 100 },
        }}
        style={{ display: "flex" }}
      >
        <Button
          flex={1}
          color={isActive ? "#f7fafc" : undefined}
          bg={isActive ? activeBgColor : undefined}
          fontWeight={isActive ? "bold" : "normal"}
          as={Link}
          onClick={onClick}
          leftIcon={leftIcon}
          target={target}
          _hover={{
            background: isActive ? hoverActiveBgColor : hoverInactiveBgColor,
          }}
          _active={{
            background: isActive ? hoverActiveBgColor : hoverInactiveBgColor,
          }}
          style={{ textDecoration: "none" }}
          {...props}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{
              duration: 0.8,
              delay,
            }}
          >
            {children}
          </motion.div>
        </Button>
      </motion.li>
    </NextLink>
  );
};
