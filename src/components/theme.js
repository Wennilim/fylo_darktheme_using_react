import "@fontsource/raleway/400.css";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      bg: "#1B2330",
      button: "#38A6CE",
      btn: "#FFF",
      ctn: "#202A3C",
      footer: "#0B1524"
    },
  },
  fonts: {
    heading: `'Raleway', sans-serif`,
    body: `'Open-sans', sans-serif`,
  },
});

export default theme;
