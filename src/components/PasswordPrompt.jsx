import React from 'react';
import { Box, Input, Button, Text, useColorModeValue, VStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.jpg'

const PasswordPrompt = ({ onPasswordSubmit }) => {
  const [password, setPassword] = React.useState('');
  const bgColor = useColorModeValue('gray.100', 'gray.700');
  const borderColor = useColorModeValue('gray.300', 'gray.600');

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bg={bgColor}
    >
      <VStack
        spacing={4}
        p={8}
        bg="white"
        boxShadow="lg"
        borderRadius="md"
        border="1px"
        borderColor={borderColor}
      >
        <Image src={logo} boxSize="100px" alt="Logo" mb={4} />

        <Text fontSize="lg" mb={2}>Veuillez entrer le mot de passe :</Text>
        <Input
          placeholder="Mot de passe"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          size="md"
        />
        <Button
          colorScheme="blue"
          onClick={() => onPasswordSubmit(password)}
          width="full"
        >
          Soumettre
        </Button>
      </VStack>
    </Box>
  );
};

export default PasswordPrompt;

