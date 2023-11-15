import { Box } from "@chakra-ui/react";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };
  return <Box className="flex flex-col mt-15">{children}</Box>;
};

export default Layout;
