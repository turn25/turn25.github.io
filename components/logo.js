import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import { LogoBox } from "./logo-box";

const Logo = () => {
  const underlineBgColor = useColorModeValue("#1a202c", "#f7fafc");
  const handImg = `/images/hand${useColorModeValue("", "-dark")}.png`;
  const textColor = useColorModeValue("gray.800", "whiteAlpha.900");

  return (
    <Link href="/">
      <a>
        <LogoBox underlineBgColor={underlineBgColor}>
          <Image src={handImg} alt="Logo" width={20} height={20} />
          <Text
            color={textColor}
            fontFamily="Gothic A1"
            fontWeight="bold"
            mx={3}
            mt={1}
          >
            Tuan Vu
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
