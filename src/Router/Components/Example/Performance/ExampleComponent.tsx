import React from "react";
import Typography from "../../Common/Typography";
import Layout from "../../Layout";
import NamesGenerator from "./NamesGenerator";

const ExampleComponent = () => {
  const names = ["nestor", "alejandro", "david", "kevin"];

  return (
    <Layout>
      <NamesGenerator names={names}/>
    </Layout>
  );
};

export default ExampleComponent;
