import { Fragment } from "react";
import styled from "@emotion/styled";

const ScrollbarWrapper = styled(Fragment)`
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #6b728090;
    border-radius: 10px;
    border: 1px solid #f3f4f620;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #9ca3af;
  }
`;

const CustomScrollbar = ({ children }) => {
  return <ScrollbarWrapper>{children}</ScrollbarWrapper>;
};

export default CustomScrollbar;
