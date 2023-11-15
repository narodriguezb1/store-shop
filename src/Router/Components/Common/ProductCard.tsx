import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  Box,
  StackDivider,
} from "@chakra-ui/react";
import React from "react";
import Typography from "./Typography";

const ProductCard = ({name, price, description}) => {
  return (
    <Card>
      <CardHeader>
        <Typography>Hola</Typography>
      </CardHeader>

      <CardBody>

      </CardBody>
    </Card>
  );
};

export default ProductCard;
