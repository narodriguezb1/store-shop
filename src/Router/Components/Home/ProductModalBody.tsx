import React from "react";
import { Box, Image, HStack } from "@chakra-ui/react";
import Typography from "../Common/Typography";

const ProductModalBody = ({ product }) => {
  const { image, title, price, description } = product;

  return (
    <Box>
      <Image
        position="relative"
        mb={2}
        w="100%"
        h="300px"
        objectFit="cover"
        src={image}
      />
      <HStack justifyContent="space-between" mt="3">
        <Typography fontWeight="Bold" fontSize="xl">
          {title}
        </Typography>
        <Typography fontWeight="Bold" fontSize="xl">{`$ ${price}`}</Typography>
      </HStack>
      <Typography>{description}</Typography>
    </Box>
  );
};

export default ProductModalBody;
