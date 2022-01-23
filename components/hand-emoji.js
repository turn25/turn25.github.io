import styled from "@emotion/styled";

const WavingHandEmoji = styled.div`
  display: inline-block;
  transform-origin: 70% 70%; /* pivot */
  animation: wave 2s ease-in-out infinite;

  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(15deg);
    }
    20% {
      transform: rotate(-10deg);
    }
    30% {
      transform: rotate(15deg);
    }
    40% {
      transform: rotate(-5deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(0deg);
    } // pause and reset
    100% {
      transform: rotate(0deg);
    }
  }
`;

export default WavingHandEmoji;
