import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Router/App/Index";
import { ChakraProvider } from "@chakra-ui/react";
import StoreProvider from "./Router/Context/Store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </StoreProvider>
  </React.StrictMode>
);
