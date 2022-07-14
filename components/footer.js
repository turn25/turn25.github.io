import { Center, Link } from "@chakra-ui/react";

const Footer = ({ ...props }) => {
  return (
    <Center as="footer" opacity={0.6} fontSize="sm" my={2} {...props}>
      &copy; {new Date().getFullYear()}&nbsp;
      <Link href="https://github.com/turn25" target="_blank">
        Tuan Vu
      </Link>
    </Center>
  );
};

export default Footer;
