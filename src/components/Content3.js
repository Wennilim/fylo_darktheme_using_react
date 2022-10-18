import React from "react";
import { Flex, Grid, Image, Text, Box, Link } from "@chakra-ui/react";
import chat from "../assets/illustration-stay-productive.png";
import fonts from "../components/theme";
import arrow from "../assets/icon-arrow.svg";

export default function Content3() {
  return (
    <Flex>
      <Grid
        alignSelf={"center"}
        marginX="auto"
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]}
        gap={180}
        maxW="80%"
        paddingBottom={40}
      >
        <Image src={chat} alt="chatting" alignSelf='center'
         w={['200','200','200','200','800']}
         h={['200','200','200','200','300']}
        
        />
        <Box>
          <Text
            color="white"
            fontFamily={fonts.heading}
            fontWeight="bold"
            fontSize={[15,40]}
            paddingBottom="5"
            maxWidth="100%"
            // marginX={["-10%", "auto"]}
            paddingTop={10}
          >
            Stay productive, wherever you are
          </Text>
          <Text
            color="white"
            maxW="100%"
            marginX={["0%", "auto"]}
            fontSize="14px"
            paddingBottom={3}
          >
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </Text>
          <Text
            color="white"
            maxW="100%"
            // marginX={["0%", "auto"]}
            fontSize="14px"
            paddingBottom={4}
          >
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </Text>
          <Flex
            direction="row"
            w="100%"
            // marginX={["-10%", "auto"]}
            // justifyContent="start"
          >
            <Link
              color="white"
              paddingEnd={2}
              _hover={{ textDecoration: "underline" }}
            >
              <Flex>
                <Text paddingEnd={2}>See how Fylo works</Text>
                <Image src={arrow} alt="arrow" color="brand.btn" w={5} />
              </Flex>
            </Link>
          </Flex>
        </Box>
      </Grid>
    </Flex>
  );
}
