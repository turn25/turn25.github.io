import { createContext } from "react";

const GlobalContext = createContext({
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
  loaderSpeed: 1,
  setLoaderSpeed: (value) => {},
});

export default GlobalContext;
