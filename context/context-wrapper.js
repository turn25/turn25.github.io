import { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import GlobalContext from "./global-context";

const ContextWrapper = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // work page post image zoom in
  const [loaderSpeed, setLoaderSpeed] = useState(1); // drawer loader speed

  return (
    <GlobalContext.Provider
      value={{ isOpen, onOpen, onClose, loaderSpeed, setLoaderSpeed }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;
