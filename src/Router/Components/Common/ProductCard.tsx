import {
  Card,
  Button,
  CardBody,
  HStack,
  Image,
  Box,
  CardFooter,
} from "@chakra-ui/react";
import React from "react";
import Typography from "./Typography";
import CustomIcon from "../CustomIcon";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ product }) => {
  const { images, title, price, description } = product;
  const urlImage = images[0];

  return (
    <Card>
      <CardBody>
        <Box w="100%" h="200px">
          <Image
            position={"relative"}
            mb={2}
            w="100%"
            h="100%"
            objectFit={"cover"}
            src={urlImage}
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

        <Typography>{description}</Typography>
      </CardBody>
      <CardFooter>
        <HStack w="100%">
          <Button w="80%">More Details</Button>
          <Button ml="auto">
            <CustomIcon icon={faCartShopping} size="24px" />
          </Button>
        </HStack>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
