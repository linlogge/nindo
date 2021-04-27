import { FC, useEffect, useRef, useState } from "react";
import { Input } from "@chakra-ui/input";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/modal";
import { useColorModeValue as mode } from "@chakra-ui/color-mode";
import { useDisclosure } from "@chakra-ui/react";

export const SearchForm: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (event) => setSearchValue(event.target.value);
  const initialRef = useRef();
  const finalRef = useRef();

  useEffect(() => {
    if (searchValue.length > 1) {
      onOpen();
    } else {
      onClose();
    }
  }, [searchValue]);

  return (
    <>
      <Input
        placeholder="Suchen..."
        variant="filled"
        bg={mode("gray.200", "purple.800")}
        value={searchValue}
        onChange={handleChange}
        ref={finalRef}
      />
      <Modal isOpen={isOpen} onClose={onClose} initialFocusRef={initialRef} finalFocusRef={finalRef}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Suche</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input value={searchValue} onChange={handleChange} size="lg" ref={initialRef} />
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </>
  );
};

export default SearchForm;
