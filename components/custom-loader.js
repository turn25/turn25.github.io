import { useEffect } from "react";
import {
  RingLoader,
  PuffLoader,
  CircleLoader,
  ClockLoader,
  HashLoader,
  DotLoader,
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

import Section from "./section";

const override = css`
  display: block;
  margin: 0 auto;
  opacity: 60%;
  transition: 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.05s;

  &:hover {
    opacity: 100%;
  }
`;
const loaderSize = 120;
const loaderLength = 5;

const CustomLoader = ({
  loader,
  setLoader,
  isSelectLoader,
  setIsSelectLoader,
  loaderSpeed,
  setLoaderSpeed,
  initY,
  ...props
}) => {
  const color = useColorModeValue("#3d7aed", "#ff7acc");
  const sliderIcon = useColorModeValue(FaSun, FaMoon);
  const sliderColor = useColorModeValue("#3d7aed", "#ff7acc");

  // get random loader everytime user open drawer
  useEffect(() => {
    if (!isSelectLoader) setRandomLoader();
  }, [isSelectLoader]);

  const handlePrevBtn = () => {
    setIsSelectLoader(true);
    if (loader > 0) setLoader((prev) => prev - 1);
    else setLoader(loaderLength);
  };

  const handleNextBtn = () => {
    setIsSelectLoader(true);
    if (loader < loaderLength) setLoader((prev) => prev + 1);
    else setLoader(0);
  };

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const setRandomLoader = () => {
    const randomNumber = generateRandomNumber(0, loaderLength);
    setLoader(randomNumber);
  };

  return (
    <Box {...props}>
      <VStack spacing={10}>
        <Section
          initY={initY}
          mb={0}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 1.5 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            scale: { type: "spring", stiffness: 50, delay: 0 },
          }}
        >
          {(() => {
            switch (loader) {
              case 0:
                return (
                  <RingLoader
                    color={color}
                    css={override}
                    speedMultiplier={loaderSpeed}
                    size={loaderSize}
                  />
                );

              case 1:
                return (
                  <PuffLoader
                    color={color}
                    css={override}
                    speedMultiplier={loaderSpeed}
                    size={loaderSize}
                  />
                );

              case 2:
                return (
                  <CircleLoader
                    color={color}
                    css={override}
                    speedMultiplier={loaderSpeed}
                    size={loaderSize}
                  />
                );

              case 3:
                return (
                  <ClockLoader
                    color={color}
                    css={override}
                    speedMultiplier={loaderSpeed}
                    size={loaderSize}
                  />
                );

              case 4:
                return (
                  <HashLoader
                    color={color}
                    css={override}
                    speedMultiplier={loaderSpeed}
                    size={loaderSize}
                  />
                );

              case 5:
                return (
                  <DotLoader
                    color={color}
                    css={override}
                    speedMultiplier={loaderSpeed}
                    size={loaderSize}
                  />
                );

              default:
                return <></>;
            }
          })()}
        </Section>

        <Section initY={initY} mb={0} delay={0.5}>
          <HStack alignItems="center" justifyContent="center" spacing={4}>
            <IconButton
              onClick={handlePrevBtn}
              aria-label="Previous Loader"
              icon={<ArrowLeftIcon />}
            />
            <IconButton
              onClick={handleNextBtn}
              aria-label="Next Loader"
              icon={<ArrowRightIcon />}
            />
          </HStack>
        </Section>

        <Section initY={initY} mb={0} w="60%" delay={0.6}>
          <Slider
            aria-label="Speed Multiplier Slider"
            defaultValue={loaderSpeed}
            min={1}
            max={4}
            onChange={(val) => setLoaderSpeed(val)}
            flex={1}
          >
            <SliderTrack>
              <SliderFilledTrack bg={sliderColor} />
            </SliderTrack>
            <SliderThumb boxSize={5}>
              <Box color={sliderColor} as={sliderIcon} />
            </SliderThumb>
          </Slider>
        </Section>
      </VStack>
    </Box>
  );
};

export default CustomLoader;
