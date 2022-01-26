import { chakra, useColorModeValue, Tooltip } from "@chakra-ui/react";

const CustomLabelAsterisk = ({ ...props }) => {
  const color = useColorModeValue("red.500", "rose.500");

  return (
    <Tooltip
      label="Required"
      aria-label="A tooltip (input required)"
      placement="top"
    >
      <chakra.span color={color} {...props} pointerEvents="auto">
        &nbsp;*
      </chakra.span>
    </Tooltip>
  );
};

export default CustomLabelAsterisk;
