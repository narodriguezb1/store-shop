import { Flex, Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { rightMenu, leftMenu } from ".";
import Typography from "../Common/Typography";
import CustomIcon from "../CustomIcon";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <Flex as={"nav"} top="0" position={"fixed"} left="0" right="0" p="6">
      <Flex justifyContent={"space-between"} w="100%">
        {leftMenu.map((section) => (
          <NavLink
            key={section.id}
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
          <NavLink key={link.id} to={link.to} className={link.className}>
            <Flex direction={"column"}>
              {link.iconName ? (
                <CustomIcon icon={faCartShopping} size="24px" />
              ) : null}

              <Typography fontSize="xl" textAlign="center">
                {link.name}
              </Typography>
            </Flex>
          </NavLink>
        ))}
      </Flex>
    </Flex>
  );
};

export default NavBar;
