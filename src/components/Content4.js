import React from "react";
import { Flex, Text, Image} from "@chakra-ui/react";

export default function Content4({ text, src, alt, name, title }) {
  return (
    <Flex direction="column">
      <Text color="brand.btn" maxW={350} paddingBottom="5" textAlign='left' >
        {text}
      </Text>
      <Flex direction="row">
        <Image
          src={src}
          alt={alt}
          borderRadius="full"
          boxSize="35px"
          marginTop={4}
        />
        <Text
          color="brand.btn"
          paddingStart={3}
          fontWeight="bold"
          paddingTop={4}
         
        >
          {name}
        </Text>
      </Flex>
      <Text
        color="brand.btn"
        maxW="70%"
        fontSize="14px"
        paddingBottom={4}
        marginLeft="12"
      >
        {title}
      </Text>
    </Flex>
  );
}
