import { Center } from "@chakra-ui/react";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };
  return (
    <Center p="40" w="100%" h="100%">
      {children}
    </Center>
  );
};

export default Layout;
