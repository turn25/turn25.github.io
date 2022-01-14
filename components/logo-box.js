import styled from "@emotion/styled";

export const LogoBox = styled.a`
  font-weight: bold;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  line-height: 18px;
  padding: 10px;
  cursor: pointer;

  p {
    position: relative;

    &::after {
      content: "";
      height: 2px;
      background: ${(props) => props.underlineBgColor};
      position: absolute;
      bottom: -6px;
      left: 0;
      right: 0;

      /* before hover */
      opacity: 0;
      transform: scaleX(0);
      transform-origin: left center; /* transform: start from left */
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.05s;
    }
  }

  img {
    opacity: 90%;
    transition: 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.05s;
  }

  &:hover img {
    transform: rotate(6deg) scale(1.025);
    opacity: 100%;
  }

  &:hover p::after {
    opacity: 1;
    transform: scaleX(1);
  }
`;
