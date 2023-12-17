import React from 'react';
import { Box, Button, Text, Image, Link } from "@chakra-ui/react";
import backHome from '../assets/backHome.png';
import logo from "../assets/logo.jpg"; // Replace with the path to your actual logo image
// import book from "../assets/book.pdf"; // Replace with the path to your book file

const Home = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      backgroundImage={`url(${backHome})`}
      backgroundSize="cover" // Ajustez selon vos besoins
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Image src={logo} boxSize="150px" alt="Logo" /> {/* Adjust size as needed */}
      <Text fontSize="3xl" color="white" mt="20px">Home Solution Energy</Text>

      {/* Button for starting the configuration process */}
      <Button mt={'15px'} colorScheme="blue">
        <Link href='/client-info'>
          Commencer à configurer
        </Link>
      </Button>

      {/* Button for downloading the book */}
      <Button mt={'15px'} colorScheme="blue">
        {/* <Link href={book} isExternal download>
          Télécharger le Book
        </Link> */}
      </Button>
    </Box>
  );
};

export default Home;
