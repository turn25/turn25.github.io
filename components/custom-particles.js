import { useColorModeValue } from "@chakra-ui/react";
import Particles from "react-tsparticles";

const CustomParticles = () => {
  const particleColor = useColorModeValue("#2D3748", "#fff");

  return (
    <Particles
      options={{
        fps_limit: 60,
        interactivity: {
          detect_on: "window",
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: { particles_nb: 0 },
            repulse: { distance: 80, duration: 0.4 },
          },
        },
        particles: {
          color: particleColor,
          links: {
            color: particleColor,
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            bounce: false,
            direction: "none",
            enable: true,
            outMode: "out",
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: { enable: true, area: 800 },
            value: 60,
          },
          opacity: { value: 0.5 },
          shape: { type: "none" },
          size: {
            random: true,
            value: 1,
          },
        },
        detectRetina: true,
      }}
      style={{ opacity: "60%" }}
    />
  );
};

export default CustomParticles;
