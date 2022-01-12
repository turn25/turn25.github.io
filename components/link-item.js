import NextLink from "next/link";
import { Link, useColorModeValue } from "@chakra-ui/react";
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
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  }
  &:hover::after {
    opacity: 1;
    transform: scaleX(1);
  }
`;

const LinkItem = ({ href, path, children, target, ...props }) => {
  const active = path === href; //current path = href
  const navbarColor = useColorModeValue("blue.400", "violet");
  const activeColor = useColorModeValue("#f7fafc", "#202020");
  const inactiveColor = useColorModeValue("blackAlpha.900", "whiteAlpha.900");
  const underlineBgColor = useColorModeValue("#1a202c", "#f7fafc");

  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={active ? navbarColor : undefined}
        color={active ? activeColor : inactiveColor}
        target={target}
        {...props} //other props
      >
        <Wrapper underlineBgColor={underlineBgColor} style={{ gap: 5 }}>
          {children}
        </Wrapper>
      </Link>
    </NextLink>
  );
};

export default LinkItem;
