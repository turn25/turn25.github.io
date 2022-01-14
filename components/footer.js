import { Center, Link } from "@chakra-ui/react";

const Footer = ({ ...props }) => {
  return (
    <Center opacity={0.6} fontSize="sm" my={2} {...props}>
      &copy; {new Date().getFullYear()}&nbsp;
      <Link href="https://github.com/vuquangtuan123" textDecoration="none">
        Tuan Vu
      </Link>
    </Center>
  );
};

export default Footer;
