import { extendTheme } from "@chakra-ui/react";

const mainTheme = extendTheme({
  styles: {
    Link: {
      baseStyle: {
         '&:hover': {
            textDecoration: 'none',
         },
      },
   },
  },
  breakpoints: {
    sm: "22.563em", // 360px suitable for iphone
    md: "30em", // 480px suitable for iphone pro max
    lg: "64em", // 1024px, suitable for iPads
    xl: "120em", // 1920px suitable for mac 14'
  },
});

export default mainTheme;
