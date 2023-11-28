import React, { useState } from "react";
import { Box, Input, Button, Text, VStack, Image } from "@chakra-ui/react";
import axios from "axios";
import logo from "../assets/logo.jpg";
import { useNavigate } from "react-router-dom";

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
      .post("http://localhost:6060/login", formData)
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.token); // Stockez le token dans le localStorage
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
    >
      <VStack
        spacing={4}
        p={8}
        bg="white"
        boxShadow="lg"
        borderRadius="md"
        border="1px"
      >
        <Image src={logo} boxSize="100px" alt="Logo" mb={4} />

        <Input
          placeholder="Prénom"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          size="md"
        />
        <Input
          placeholder="Mot de passe"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          size="md"
        />
        <Button colorScheme="blue" onClick={handleSubmit} width="full">
          Soumettre
        </Button>
      </VStack>
    </Box>
  );
};

export default PasswordPrompt;
