import { Box } from "@chakra-ui/react";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };
  return (
    <Box
      mt="20"
      justifyContent="center"
      p="10"
      alignItems={"center"}
      w="100%"
      h="100%"
    >
      {children}
    </Box>
  );
};

export default Layout;
