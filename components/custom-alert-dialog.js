import { useRef } from "react";
import {
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useColorModeValue,
} from "@chakra-ui/react";

const CustomAlertDialog = ({ isOpen, onClose, onSubmit }) => {
  const cancelRef = useRef();
  const submitBtnColor = useColorModeValue("blue", "teal");

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Sending Form
          </AlertDialogHeader>

          <AlertDialogBody>Are you sure?</AlertDialogBody>

          <AlertDialogFooter>
            <Button w={24} ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button
              colorScheme={submitBtnColor}
              w={24}
              ml={3}
              onClick={() => {
                onClose();
                onSubmit();
              }}
            >
              Send
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default CustomAlertDialog;
