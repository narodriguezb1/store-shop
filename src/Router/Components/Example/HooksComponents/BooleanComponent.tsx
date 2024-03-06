import React, { useCallback } from "react";
import Layout from "../../Layout";
import Typography from "../../Common/Typography";
import { Spinner, useBoolean } from "@chakra-ui/react";
import WrapperButton from "../Performance/WrapperButton";

const BooleanComponent = () => {
  const [isLoading, setIsLoading] = useBoolean(false);
  const [isError, setIsError] = useBoolean(false);

  const handleClick = useCallback(
    () => {
      setIsError.toggle()
    },
    [],
  )
  

  return (
    <Layout>
      {isLoading ? (
        <Spinner />
      ) : (
        <Typography>
          {isError ? "There are an error" : "Keep doing things"}
        </Typography>
      )}
      <WrapperButton label="Error" onClick={handleClick}/>
    </Layout>
  );
};

export default BooleanComponent;
