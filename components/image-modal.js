import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  IconButton,
  Image,
} from "@chakra-ui/react";

import DrawerToggleButton from "./drawer-toggle-btn";
import Footer from "./footer";

const ImageModal = ({ src, title, isOpen, onClose }) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mx={4}
        >
          {title}
          <IconButton
            aria-label="Close Drawer"
            icon={<DrawerToggleButton isOpen={isHovered} />}
            onClick={() => {
              setHovered(true);
              onClose();
            }}
            variant="ghost"
            width="20px"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          />
        </ModalHeader>

        <ModalBody
          display="flex"
          justifyContent="center"
          alignItems="center"
          flex={1}
        >
          <Image src={src} alt={title} borderRadius={10} />
        </ModalBody>

        <ModalFooter display="flex" alignItems="center" justifyContent="center">
          <Footer />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ImageModal;
