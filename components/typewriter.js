import { chakra } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";

const TypeWritter = ({ ...props }) => {
  return (
    // converts non-chakra components to chakra-enabled components
    <chakra.span {...props}>
      <Typewriter
        options={{
          strings: ["Developer", "Designer"],
          autoStart: true,
          loop: true,
          delay: "180",
          deleteSpeed: "180",
          cursor: "|",
        }}
      />
    </chakra.span>
  );
};

export default TypeWritter;
