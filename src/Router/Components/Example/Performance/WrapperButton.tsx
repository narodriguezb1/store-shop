import React, { memo } from "react";
import { Button } from "@chakra-ui/react";

const WrapperButton = ({onClick, label}) => {
  console.log("hi")
  return (
     <Button onClick={()=>{
      onClick()
     }}>{label}</Button>
  );
};

const OptimizeButton = memo(WrapperButton)

export default OptimizeButton;
