import { FC, useEffect, useRef, useState } from "react";
import { Input } from "@chakra-ui/input";
import { LinkOverlay, Text, LinkBox } from "@chakra-ui/layout";
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
import { Avatar, Stack, useDisclosure } from "@chakra-ui/react";
import Link from "next/link";

export const SearchForm: FC = () => {
  const [data, setData] = useState([]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [searchValue, setSearchValue] = useState("");
  const handleChange = (event) => setSearchValue(event.target.value);

  const initialRef = useRef();
  const finalRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      const term = encodeURIComponent(searchValue);
      const res = await fetch(`/api/search/${term}`);
      const data = await res.json();
      setData(data);
    };
    if (searchValue.length > 1) {
      fetchData();
      onOpen();
    } else {
      setData([]);
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
            <Input value={searchValue} onChange={handleChange} size="lg" ref={initialRef} variant="filled" />
          </ModalBody>
          {data && (
            <ModalBody>
              <Stack spacing="0">
                {data.map((artist, i) => (
                  <LinkBox py="1">
                    <Stack direction="row" justify="space-between" align="center" key={i}>
                      <Avatar src={artist.avatar} />
                      <Link href={`/artist/${artist.id}`} passHref>
                        <LinkOverlay onClick={onClose} _hover={{ color: "purple.500" }}>
                          <Text fontWeight="bold">{artist.name}</Text>
                        </LinkOverlay>
                      </Link>
                    </Stack>
                  </LinkBox>
                ))}
              </Stack>
            </ModalBody>
          )}
          <ModalFooter />
        </ModalContent>
      </Modal>
    </>
  );
};

export default SearchForm;
