import React, { useCallback, useMemo, useState } from "react";
import Typography from "../Common/Typography";
import WrapperButton from "./WrapperButton";

const NamesGenerator = ({ names }) => {
  const [name, setName] = useState(null);

  const getName = useCallback(() => {
    const random = Math.floor(Math.random() * (names.length - 1));
    setName(names[random]);
  }, [names]);

  const clearName = useCallback(() => {
    setName(null);
  }, []);

  return (
    <div>
      {useMemo(() => {
        return <Typography>{name ? name : "No hay nombre"}</Typography>;
      }, [name])}


      <WrapperButton onClick={getName} label="Generate Name" />
      <WrapperButton onClick={clearName} label="Delete Name" />
    </div>
  );
};

export default NamesGenerator;
