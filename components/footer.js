import { Center, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Center opacity={0.5} fontSize="sm">
      &copy; {new Date().getFullYear()}&nbsp;
      <Link href="https://github.com/vuquangtuan123" textDecoration="none">
        Tuan Vu
      </Link>
    </Center>
  );
};

export default Footer;
