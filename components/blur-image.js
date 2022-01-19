import Image from "next/image";
import { useState } from "react";
import { chakra } from "@chakra-ui/react";

const StyledImage = chakra(Image);

const BlurImage = ({ src, alt, ...props }) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <StyledImage
      src={src}
      alt={alt}
      filter={isLoading ? "blur(16px) grayscale(1)" : ""}
      transition="600ms ease-in-out"
      borderRadius={10}
      onLoadingComplete={() => setLoading(false)}
      {...props}
    />
  );
};

export default BlurImage;
