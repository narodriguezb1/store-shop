import { Flex, Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { rightMenu, leftMenu } from ".";
import Typography from "../Common/Typography";

const NavBar = () => {
  return (
    <Flex as={"nav"} top="0" position={"fixed"} left="0" right="0" p="6">
      <Flex justifyContent={"space-between"} w="100%">
        {leftMenu.map((section) => (
          <NavLink
            key={section.name}
            to={section.to}
            className={section.className}
          >
            <Typography fontSize="xl" textAlign="center">
              {section.name}
            </Typography>
          </NavLink>
        ))}
      </Flex>
      <Box w="40%" />
      <Flex justifyContent={"space-between"} w="100%">
        {rightMenu.map((link) => (
          <NavLink key={link.name} to={link.to} className={link.className}>
            <Typography fontSize="xl" textAlign="center">
              {link.name}
            </Typography>
          </NavLink>
        ))}
      </Flex>
    </Flex>
  );
};

export default NavBar;
