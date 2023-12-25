import React, { useState } from "react";
import { Box, Input, Button, VStack, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import logo from "../assets/logo.jpg"; // Make sure this is the logo you want to use
import { useNavigate } from "react-router-dom";
import backHome from '../assets/backHome.png';


const PasswordPrompt = ({ onPasswordSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    axios
    .post(`${process.env.REACT_APP_SERVER_URL}/login`, formData)
      .then((response) => {
        console.log(response);
        console.log("API Response:", response.data);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("admin", response.data.admin); 
        onPasswordSubmit(response.data.token);
        navigate("/");
        window.location.reload(false);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(formData);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      backgroundImage={`url(${backHome})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <VStack
        spacing={4}
        p={8}
        bg="transparent" 
        boxShadow="none" 
      >
        <Image src={logo} boxSize="150px" alt="Logo" />

        <Box position="relative" height="50px" width="300px"> 
          <Input
            placeholder="Identifiant"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            size="lg"
            bg="white" 
            border="none" 
            borderRadius="0" 
          />
          <Text position="absolute" left="0" top="-20px" color="white">Identifiant</Text>
        </Box>

        <Box position="relative" height="50px" width="300px"> 
          <Input
            placeholder="Mot de passe"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            size="lg" 
            bg="white" 
            border="none" 
            borderRadius="0" 
          />
          <Text position="absolute" left="0" top="-20px" color="white">Mot de passe</Text>
        </Box>

        <Button colorScheme="#a5bbd4" onClick={handleSubmit} width="full">
          Connexion
        </Button>
      </VStack>
    </Box>
  );
};

export default PasswordPrompt;
