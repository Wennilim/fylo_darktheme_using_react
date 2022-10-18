import { Flex, Text, Image, IconButton, Box } from "@chakra-ui/react";
import React from "react";
import location from "../assets/icon-location.svg";
import phone from "../assets/icon-phone.svg";
import email from "../assets/icon-email.svg";
import LinkTitle from "./LinkTitile";
import logo from "../assets/logo.svg";
import {
  RiFacebookCircleFill,
  RiTwitterLine,
  RiInstagramFill,
} from "react-icons/ri";

export default function Footer2() {
  return (
    <Box paddingX={10} backgroundColor="brand.footer" paddingY={30} marginTop={['-100','-100','-100','-100','-150']}>
      <Flex flexDirection="column" w={200} paddingTop='40' >
        <Image src={logo} alt="logo fylo" />
      </Flex>
      <Flex
        justifyContent={['center','center','center','space-between']}
        direction={["column", "column", "column", "row"]}
        marginTop="100"
        gap={["10", "15", "20", "30", "100"]}
      >
        <Flex gap="3">
          <Image src={location} alt="location icon" w="14px" h="19px" />
          <Text
            textColor="white"
            maxWidth={300}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </Text>
        </Flex>

        <Flex
          direction="column"
          gap="3"
          
        >
          <Flex direction="row" gap="3">
            <Image
              src={phone}
              alt="phone icon"
              w="14px"
              h="19px"
             
            />
            <Text
              textColor="white"    
            >
              +1-543-123-4567
            </Text>
          </Flex>
          <Flex direction="row" gap="3">
            <Image
              src={email}
              alt="email icon"
              w="17px"
              h="15px"
            />
            <Text
              textColor="white"
              maxWidth={390}
            >
              example@fylo.com
            </Text>
          </Flex>
        </Flex>
        <Flex
          direction="column"
          gap={5}
          marginTop={["10", "10", "10", "0"]}
          
        >
          <LinkTitle title="About Us" />
          <LinkTitle title="Jobs" />
          <LinkTitle title="Press" />
          <LinkTitle title="Blog" />
        </Flex>
        <Flex
          direction="column"
          gap={5}
          marginTop={["10", "10", "10", "0"]}
        >
          <LinkTitle title="Contact Us" />
          <LinkTitle title="Term" />
          <LinkTitle title="Privacy" />
        </Flex>

        <Flex gap={3} justifyContent="center">
          <IconButton
            as={RiFacebookCircleFill}
            size="md"
            isRound="True"
            colorScheme="facebook"
         
            height="30px"
            width="30px"
            variant="ghost"
           
          ></IconButton>
          <IconButton
            as={RiTwitterLine}
            size="md"
            isRound="True"
            colorScheme="twitter"
           
            height="30px"
            width="30px"
            variant="ghost"
            
          ></IconButton>
          <IconButton
            as={RiInstagramFill}
            size="md"
            isRound="True"
            colorScheme="gray"
            
            height="30px"
            width="10px"
            bgGradient="linear(to-tr ,#F8D40A ,#F98109, #A438CE)"
            variant="ghost"
          ></IconButton>
        </Flex>
      </Flex>
    </Box>
  );
}
