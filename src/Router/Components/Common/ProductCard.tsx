import { Card, Button, CardBody, HStack, Image } from "@chakra-ui/react";
import React from "react";
import Typography from "./Typography";
import CustomIcon from "../CustomIcon";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ product }) => {
  const { images, title, price, description } = product;

  const urlImage = images ? images[0] : ""

  return (
    <Card>
      <CardBody>
        <Image src={urlImage} alt="Dan Abramov" />
        <Typography>{title}</Typography>
        <Typography>{price}</Typography>
        <Typography>${description}</Typography>
        <HStack w="100%">
          <Button w="80%">More Details</Button>
          <Button ml="auto">
            <CustomIcon icon={faCartShopping} size="24px" />
          </Button>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
