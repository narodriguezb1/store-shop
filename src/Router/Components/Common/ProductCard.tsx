import { Card, Button, CardBody, Image, HStack } from "@chakra-ui/react";
import React from "react";
import Typography from "./Typography";
import CustomIcon from "../CustomIcon";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const ProductCard = () => {
  return (
    <Card>
      <CardBody>
        <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
        <Typography>Nombre producto</Typography>
        <Typography>$500</Typography>
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
