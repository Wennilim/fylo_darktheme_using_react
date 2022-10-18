import { Image, Flex, Text } from "@chakra-ui/react";
import React from "react";
import fonts from "../components/theme";

export default function Content2({ src, alt, title, text }) {
  return (
    <Flex
      justifyContent="center"
      w="100%"
      maxW="400px"
      direction="column"
      // paddingLeft={10}
      align="center"
    >
      <Image src={src} alt={alt}  />
      <Text
        textColor="white"
        fontFamily={fonts.heading}
        fontWeight="bold"
        fontSize={20}
        paddingBottom="2"
      >
        {title}
      </Text>
      <Text textColor="white" fontSize={14} fontFamily="fonts.body">
        {text}
      </Text>
    </Flex>
  );
}
