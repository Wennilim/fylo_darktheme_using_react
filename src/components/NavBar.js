import { Flex } from "@chakra-ui/react";
import React from "react";
import NavTitle from "./NavTitle";
import "@fontsource/raleway/700.css";
import Logo from "../assets/logo.svg";
import { Image } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <>
      <Flex
        direction="row"
        marginBottom={8}
        paddingX={5}
        paddingY={5}
        justifyContent="space-between"
      >
        <Image src={Logo} alt="logo fylo" color="white" 
        w={[20,20,20,40,40]}
        h={[7,7,7,14,14]}
        />
        <Flex alignItems="center" gap={["3", "3","3","5", "10"]}>
          <NavTitle title="Features" />
          <NavTitle title="Team" />
          <NavTitle title="Sign In" />
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
