import Typewriter from "typewriter-effect";

const TypeWritter = ({}) => {
  return (
    <span style={{}}>
      <Typewriter
        options={{
          strings: ["Developer", "Designer"],
          autoStart: true,
          loop: true,
          delay: "180",
          deleteSpeed: "180",
        }}
      />
    </span>
  );
};

export default TypeWritter;
