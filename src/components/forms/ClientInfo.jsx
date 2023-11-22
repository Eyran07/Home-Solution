import {
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
  Button,
  Box, Link, Heading,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom'


const ClientInfo = () => {
  return (
    <Box height="100vh" display={"flex"} alignItems={'center'} justifyContent={"center"}>
      <VStack spacing={4}>
        <Heading size={'lg'}>Coordonees du client</Heading>
        <FormControl id="title">
          <FormLabel>Civilité</FormLabel>
          <Select placeholder="Selectionez une option">
            <option value="mr">Monsieur</option>
            <option value="mrs">Madame</option>
          </Select>
        </FormControl>
        <Box display={"flex"} flexDirection={"row"}>
          <FormControl mr={2} id="lastName">
            <FormLabel>Nom</FormLabel>
            <Input placeholder="Nom de famille" />
          </FormControl>

          <FormControl id="firstName">
            <FormLabel>Prénom</FormLabel>
            <Input placeholder="Prénom" />
          </FormControl>
        </Box>
        <Box display={"flex"} flexDirection={"row"}>
          <FormControl mr={2} id="mobile">
            <FormLabel>Mobile</FormLabel>
            <Input placeholder="Numéro de portable" />
          </FormControl>

          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input placeholder="Adresse email" />
          </FormControl>
        </Box>
        <FormControl id="address">
          <FormLabel>Adresse</FormLabel>
          <Input placeholder="Adresse" />
        </FormControl>
        <Box mb={'10px'} display={"flex"} flexDirection={"row"}>
          <FormControl mr={2} id="postalCode">
            <FormLabel>Code postal</FormLabel>
            <Input placeholder="Code postal" />
          </FormControl>

          <FormControl id="city">
            <FormLabel>Ville</FormLabel>
            <Input placeholder="Ville" />
          </FormControl>
        </Box>
        <Button colorScheme="orange" size="lg">
          <Link as={ReactRouterLink} to={'/'} >Étude du logement</Link>
        </Button>
      </VStack>
    </Box>
  );
};

export default ClientInfo;
