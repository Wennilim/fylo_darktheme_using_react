import { Flex, Text, Input, Box, FormControl } from "@chakra-ui/react";
import React from "react";
import fonts from "../components/theme";
import { useState } from "react";
import validator from "validator";

export default function Content5() {
  const [emailError, setEmailError] = useState("");
  const validateEmail = (e) => {
    var email = e.target.value;
    if (email !== "" && validator.isEmail(email)) {
      setEmailError("");
    } else if (email === "") {
      setEmailError("Please enter a email address.");
    } else {
      setEmailError("Please enter a valid email address.");
    }
  };
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      direction="column"
      bgColor="brand.ctn"
      paddingX={5}
      paddingY="5"
      marginX={[10,10,10,0,300]}
     zIndex='999'
    >
      <Text
        textAlign="center"
        textColor="white"
        fontFamily={fonts.heading}
        fontWeight="bold"
        fontSize={["15", "30", "30", "40"]}
        paddingBottom={5}
      >
        Get early access today
      </Text>
      <Text
        color="white"
        maxW="350"
        marginX="auto"
        fontSize={["14", "16", "16", "19"]}
        paddingBottom={30}
        textAlign="center"
      >
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </Text>
      <FormControl onChange={(e) => validateEmail(e)}>
        <Flex direction={["column", "column", "column", "row", "row"]}>
          <Flex
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            w={["100%", "100%", "100%", "70%", "70%"]}
          >
            <Input
              focusBorderColor="brand.btn"
              placeholder="email@example.com"
              borderRadius={70}
              backgroundColor="brand.btn"
              size="lg"
              marginX={["0", "0", "0", "30", "30"]}
            />

            
          </Flex>

          <Box
            as="button"
            color="brand.btn"
            bgGradient="linear(to-l, #38A6CE, #4CC2D2 )"
            borderRadius={70}
            marginX={["0", "0", "0", "50", "0","100"]}
            marginY="30"
            paddingX={["0", "0", "0", "15", "15", "15"]}
            paddingY={["3", "4"]}
            fontWeight="bold"
            _active={{
              bg: "#8ADAE3",
              transform: "scale(0.98)",
              borderColor: "#bec3c9",
            }}
          >
            Get Started For Free
          </Box>
        </Flex>
        <Flex>
          <Text
              fontSize="11px"
              color="red"
              fontWeight="light"
              fontFamily="fonts.body"
              marginTop={3}
            >
              {emailError}
            </Text>
          </Flex>
      </FormControl>
    </Flex>
  );
}
