import { Card, Button, CardBody, HStack,Image } from "@chakra-ui/react";
import React from "react";
import Typography from "./Typography";
import CustomIcon from "../CustomIcon";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({product}) => {
  const {image, title, price, description} = product
  
  return (
    <Card>
      <CardBody>
        <Image src={image} alt="Dan Abramov" />
        <Typography>{title}</Typography>
          <Typography>{price}</Typography>
        <Typography>${description}</Typography>
        <HStack w="100%">
          <Button w="70%">More Details</Button>
          <Button>
            <CustomIcon
              icon={faCartShopping}
              size="24px"
            />
          </Button>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
