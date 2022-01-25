import styled from "@emotion/styled";
import { Icon, useColorModeValue } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { useField } from "formik";
import { CheckIcon } from "@chakra-ui/icons";

import CustomLabelAsterisk from "./custom-asterisk";
import AnimatedFormErrorMessage from "./form-error-message";

const cubicBezier = "cubic-bezier(0.25, 0.46, 0.45, 0.94)";

const InputWrapper = styled.div`
  margin: 10px 0 0 0;
  padding-top: 10px;
  height: 80px;
`;

const InputGroup = styled.div`
  color: ${(props) => props.color};
  position: relative;
  font-size: 16px;

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px ${(props) => props.autofillColor} inset; /* Change the color to your own background color */
    -webkit-text-fill-color: ${(props) => props.focusColor};
    -webkit-opacity: 90%;
  }

  // Label
  input:focus ~ label,
  input:not(:placeholder-shown) ~ label {
    color: ${(props) => props.focusLabelColor};
    transform: translateY(-26px);
    font-size: 18px;
    font-weight: bold;
  }

  // transparent placeholder
  input::placeholder {
    opacity: 0;
  }

  // Input & Logo Icon
  input:focus,
  input:focus ~ span.icon {
    color: ${(props) => props.focusColor};
  }

  input:valid,
  input:valid ~ span.icon {
    color: ${(props) => props.focusColor};
  }

  // Underline
  input:focus ~ div.underline {
    background: ${(props) => props.focusLabelColor};
    transform: scaleX(100%);
  }

  div.error {
    background: ${(props) => props.invalidUnderlineColor};
    transform: scaleX(100%);
  }

  // Check Icon
  span.validCheck {
    opacity: 1;
  }
`;

const InputIcon = styled.span`
  position: absolute;
  left: 8px;
  bottom: 9px;
  transition: color 250ms ${cubicBezier} 0.05s;
`;

const ValidCheckIcon = styled.span`
  position: absolute;
  right: 8px;
  bottom: 12px;
  transition: opacity 250ms ${cubicBezier} 0.05s;
  opacity: 0;
`;

const InputLabel = styled.label`
  position: absolute;
  bottom: 10px;
  left: 30px;
  background: transparent;
  transition: all 250ms ${cubicBezier} 0.05s;
  pointer-events: none;
  z-index: 1;
`;

const InputField = styled.input`
  background: transparent;
  width: 100%;
  padding: 10px 30px 10px 30px;
  outline: none;
  border-bottom: 2px solid #dadce0;
  border-radius: 8px 8px 0 0px;
  transition: color 250ms ${cubicBezier} 0.05s;
`;

const InputUnderline = styled.div`
  background-color: transparent;
  width: 100%;
  height: 2px;
  position: absolute;
  bottom: 0;
  transition: all 250ms ${cubicBezier} 0.05s;
  transform: scaleX(0);
`;

const CustomInput = ({ htmlFor, label, type, icon, ...props }) => {
  const [field, meta] = useField(props);
  const color = useColorModeValue("#00000090", "#f7fafc90");
  const autofillColor = useColorModeValue("#f7fafc", "#475569");
  const focusLabelColor = useColorModeValue("#3b82f6", "#14b8a6");
  const focusColor = useColorModeValue("#000", "#f7fafc");
  const invalidUnderlineColor = useColorModeValue("#e53e3e", "#805AD5");
  const checkColor = useColorModeValue("green.500", "pink.500");

  const error = () => {
    return meta.error && meta.touched;
  };

  return (
    <InputWrapper>
      <InputGroup
        color={color}
        autofillColor={autofillColor}
        focusColor={focusColor}
        focusLabelColor={focusLabelColor}
        invalidUnderlineColor={invalidUnderlineColor}
      >
        <InputField
          color={color}
          type={type}
          id={props.id}
          name={props.name}
          placeholder={props.placeholder}
          {...field}
          {...props}
          required
        />
        <InputUnderline className={`underline ${error() && "error"}`} />

        <InputLabel htmlFor={htmlFor}>
          {label}
          <CustomLabelAsterisk />
        </InputLabel>

        <InputIcon className="icon">
          <Icon as={icon} w={3.5} h={3.5} />
        </InputIcon>

        <ValidCheckIcon
          className={`${!meta.error && meta.touched && "validCheck"}`} // meta.touched to check on init
        >
          <Icon as={CheckIcon} color={checkColor} w={3.5} h={3.5} />
        </ValidCheckIcon>
      </InputGroup>

      {/* Error Message */}
      <AnimatePresence>
        {error() && (
          <AnimatedFormErrorMessage>{meta.error}</AnimatedFormErrorMessage>
        )}
      </AnimatePresence>
    </InputWrapper>
  );
};

export default CustomInput;
