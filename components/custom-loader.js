import { useState, useEffect } from "react";
import {
  RingLoader,
  PuffLoader,
  CircleLoader,
  ClockLoader,
  HashLoader,
  DotLoader,
  BounceLoader,
} from "react-spinners";
import { css } from "@emotion/react";
import {
  Box,
  HStack,
  VStack,
  IconButton,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  useColorModeValue,
} from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { FaSun, FaMoon } from "react-icons/fa";

const override = css`
  display: block;
  margin: 0 auto;
`;
const loaderSize = 120;
const currLoaderLength = 6;

const CustomLoader = ({
  activeNavBar,
  currLoader,
  setCurrLoader,
  isSelectLoader,
  setIsSelectLoader,
  ...props
}) => {
  const [speed, setSpeed] = useState(1);

  // get random loader everytime user open drawer
  useEffect(() => {
    if (!isSelectLoader) {
      setRandomLoader();
    }
    return;
  }, [isSelectLoader]);

  const color = useColorModeValue("#3d7aed", "#ff63c3");
  const sliderIcon = useColorModeValue(FaSun, FaMoon);
  const sliderColor = useColorModeValue("#3d7aed", "#ff63c3");

  const handlePrevBtn = () => {
    setIsSelectLoader(true);
    if (currLoader > 0) setCurrLoader((prev) => prev - 1);
    else setCurrLoader(currLoaderLength);
  };

  const handleNextBtn = () => {
    setIsSelectLoader(true);
    if (currLoader < currLoaderLength) setCurrLoader((prev) => prev + 1);
    else setCurrLoader(0);
  };

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const setRandomLoader = () => {
    const randomNumber = generateRandomNumber(0, currLoaderLength);
    setCurrLoader(randomNumber);
  };

  return (
    <Box {...props}>
      <VStack spacing={10}>
        {(() => {
          switch (currLoader) {
            case 0:
              return (
                <RingLoader
                  color={color}
                  css={override}
                  speedMultiplier={speed}
                  size={loaderSize}
                />
              );

            case 1:
              return (
                <PuffLoader
                  color={color}
                  css={override}
                  speedMultiplier={speed}
                  size={loaderSize}
                />
              );

            case 2:
              return (
                <CircleLoader
                  color={color}
                  css={override}
                  speedMultiplier={speed}
                  size={loaderSize}
                />
              );

            case 3:
              return (
                <ClockLoader
                  color={color}
                  css={override}
                  speedMultiplier={speed}
                  size={loaderSize}
                />
              );

            case 4:
              return (
                <HashLoader
                  color={color}
                  css={override}
                  speedMultiplier={speed}
                  size={loaderSize}
                />
              );

            case 5:
              return (
                <DotLoader
                  color={color}
                  css={override}
                  speedMultiplier={speed}
                  size={loaderSize}
                />
              );

            case 6:
              return (
                <BounceLoader
                  color={color}
                  css={override}
                  speedMultiplier={speed}
                  size={loaderSize}
                />
              );

            default:
              return <></>;
          }
        })()}

        <HStack alignItems="center" justifyContent="center" spacing={4}>
          <IconButton
            onClick={handlePrevBtn}
            aria-label="Previous Loader"
            icon={<ArrowLeftIcon />}
            _focus={{ boxShadow: activeNavBar }}
          />
          <IconButton
            onClick={handleNextBtn}
            aria-label="Next Loader"
            icon={<ArrowRightIcon />}
            _focus={{ boxShadow: activeNavBar }}
          />
        </HStack>
        <Slider
          aria-label="Speed Multiplier Slider"
          defaultValue={speed}
          min={1}
          max={4}
          onChange={(val) => setSpeed(val)}
          width="60%"
        >
          <SliderTrack>
            <SliderFilledTrack bg={sliderColor} />
          </SliderTrack>
          <SliderThumb boxSize={5}>
            <Box color={sliderColor} as={sliderIcon} />
          </SliderThumb>
        </Slider>
      </VStack>
    </Box>
  );
};

export default CustomLoader;
