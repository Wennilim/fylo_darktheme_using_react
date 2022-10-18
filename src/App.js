import { Box, Flex, Grid, GridItem, Image } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import Content1 from "./components/Content1";
import Content2 from "./components/Content2";
import icon1 from "../src/assets/icon-access-anywhere.svg";
import icon2 from "../src/assets/icon-security.svg";
import icon3 from "../src/assets/icon-collaboration.svg";
import icon4 from "../src/assets/icon-any-file.svg";
import heroImage from "./assets/bg-curvy-desktop.svg";
import Content3 from "./components/Content3";
import Content4 from "./components/Content4";
import profile1 from "../src/assets/profile-1.jpg";
import profile2 from "../src/assets/profile-2.jpg";
import profile3 from "../src/assets/profile-3.jpg";
import quote from "./assets/bg-quotes.png";
import Content5 from "./components/Content5";
import Footer from "./components/Footer";


function App() {
  return (
    <>
    <Box >
      <Flex direction='column' paddingLeft={1}
        backgroundColor="brand.bg"
        bgImage={[`url(${heroImage})`]}
        backgroundPosition="center"
        backgroundRepeat="no-repeat" 
      >
        <NavBar />
        <Content1 />

        <Grid
          alignSelf={["left","center"]}
          marginX={["80px","auto"]}
          align="center"
          templateColumns={["repeat(1, 1fr)","repeat(1, 1fr)","repeat(2, 1fr)"]}
          gap={200}
          maxW="50%"
          paddingBottom={40}
        >
          <Content2
            src={icon1}
            alt="icon1"
            title="Access your files, anywhere"
            text="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
          />
          <Content2
            src={icon2}
            alt="icon2"
            title="Security you can trust"
            text="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
          />
          <Content2
            src={icon3}
            alt="icon3"
            title="Real-time collaboration"
            text="Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
          />
          <Content2
            src={icon4}
            alt="icon4"
            title="Store any type of file"
            text="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
          />
        </Grid>
        <Content3 />
        <Box>
          <Image src={quote} alt="quotes"
             marginLeft={["3","5","18",'30','250']} 
             w={['10','0','10','50']}
             h={['10','0','10','10']}
           />
          <Grid
            templateColumns={["repeat(1, 1fr)","repeat(1, 1fr)","repeat(3, 1fr)"]}
             gap={[50,150,50,50,50]}
            //  paddingTop={['-100','30','30']}
            paddingX={["4","50","50","50","280"]}
            paddingBottom={["10","300","200","100"]}
            zIndex='999'
            marginTop={["-10px"]}
          >
            <GridItem
              bg="brand.ctn"
              maxWidth={["100%","100%","100%","100%","90%"]}
              h="250"
              // paddingLeft="10"
              // paddingTop="10"
            >
              <Content4
                text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
                src={profile1}
                alt="profile 1"
                name="Satish Patel"
                title="Founder & CEO, Huddle"
              />
            </GridItem>
            <GridItem
              bg="brand.ctn"
              maxWidth={["100%","100%","100%","100%","90%"]}
              h="250"
              // paddingLeft="10"
              // paddingTop="10"
            >
              <Content4
                text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
                src={profile2}
                alt="profile 2"
                name="Bruce McKenzie"
                title="Founder & CEO, Huddle"
              />
            </GridItem>
            <GridItem
              bg="brand.ctn"
              maxWidth={["100%","100%","100%","100%","90%"]}
              h="250"
              // paddingLeft="10"
              // paddingTop="10"
            >
              <Content4
                text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
                src={profile3}
                alt="profile 3"
                name="Iva Boyd"
                title="Founder & CEO, Huddle"
              />
            </GridItem>
          </Grid>
        </Box>
        <Content5 />
        <Footer/>
        
      </Flex>
    </Box></>
  );
}

export default App;
