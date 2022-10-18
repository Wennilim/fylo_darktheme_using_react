import React from "react";
import { Flex, Image, Text, Box } from "@chakra-ui/react";
import intro from "../assets/illustration-intro.png";
import fonts from "../components/theme";

export default function Content1() {
  return (
    <Box w="100%">
      <Flex direction="column" alignItems="center" paddingX="5">
        <Image src={intro} alt="introduction" />
        <Text
          textColor="white"
          fontFamily={fonts.heading}
          fontWeight="bold"
          fontSize={[28, 30, 40]}
          textAlign="center"
          paddingY={10}
        >
          All your files in one secure location, accessible anywhere.
        </Text>
        <Text
          textColor="white"
          paddingBottom={6}
          fontSize={20}
          textAlign="center"
          maxW={800}
        >
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </Text>
        <Box
          as="button"
          color="brand.btn"
          bgGradient="linear(to-l, #38A6CE, #4CC2D2 )"
          borderRadius={70}
          paddingX="85px"
          paddingY="15px"
          fontWeight="bold"
          marginBottom={40}
          _active={{
            bg: "#8ADAE3",
            transform: "scale(0.98)",
            borderColor: "#bec3c9",
          }}
        >
          Get Started
        </Box>
      </Flex>
    </Box>
  );
}
