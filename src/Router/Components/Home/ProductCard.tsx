import {
  Card,
  Button,
  CardBody,
  HStack,
  Image,
  Box,
  CardFooter,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import Typography from "../Common/Typography";
import CustomIcon from "../CustomIcon";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import ProductModalBody from "./ProductModalBody";

const ProductCard = ({ product }) => {
  const { image, title, price, description } = product;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
    <Card>
      <CardBody>
        <Box >
          <Image
            position={"relative"}
            mb={2}
            w="100%"
            h="100%"
            objectFit={"cover"}
            src={image}
          />
        </Box>
        <HStack justifyContent="space-between" mt="5">
          <Typography fontWeight="Bold" fontSize="xl">
            {title}
          </Typography>
          <Typography
            fontWeight="Bold"
            fontSize="xl"
          >{`$ ${price}`}</Typography>
        </HStack>

        <Typography ellipsis>{description}</Typography>
      </CardBody>
      <CardFooter>
        <HStack w="100%">
          <Button w="80%" onClick={onOpen} >More Details</Button>
          <Button ml="auto">
            <CustomIcon icon={faCartShopping} size="24px" />
          </Button>
        </HStack>
      </CardFooter>
    </Card>
     <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ProductModalBody product={product} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
    
  );
};

export default ProductCard;
