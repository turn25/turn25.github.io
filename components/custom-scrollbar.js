import { Global, css } from "@emotion/react";
import { useColorModeValue } from "@chakra-ui/react";

const CustomScrollbar = () => {
  const thumbColor = useColorModeValue("#656566", "#9c9ea0");
  const thumbHoverColor = useColorModeValue("#9c9ea0", "#656566");
  const trackColor = useColorModeValue("#f7fafc", "#363636");

  return (
    <Global
      styles={css`
        body {
          /* Width */
          ::-webkit-scrollbar {
            width: 16px;
          }

          /* Handle */
          /* Thumb */
          ::-webkit-scrollbar-thumb {
            border-radius: 100px;
            background: ${thumbColor};
            /* creates padding around scroll thumb */
            border: 4px solid transparent;
            background-clip: padding-box;
          }

          /* Track */
          ::-webkit-scrollbar-track {
            background: ${trackColor};
          }

          /* Handle on hover */
          ::-webkit-scrollbar-thumb:hover {
            background: ${thumbHoverColor};
            background-clip: padding-box;
          }
        }
      `}
    />
  );
};

export default CustomScrollbar;
