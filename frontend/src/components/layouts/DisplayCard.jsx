import React from 'react';
import { Box, Image, Text, VStack } from '@chakra-ui/react';
import Picto1 from '../../assets/picto-audit/vos consommations poste par poste/Picto-1.png';

const DisplayCard = ({ label }) => {
  // Montant fixe pour le prix et l'unité
  const price = "660€";
  const unit = "(7€/m2 chauffé)";

  return (
    <VStack
      width="245px"
      bg="#EDF2F7"
      borderRadius="125px 125px 0 0"
      border="2px solid #a5bbd4"
      borderColor="#a5bbd4"
      overflow="hidden"
      spacing={4}
      align="center"
    >
      {/* Icône et Label */}
      <Box
        pt="75px"
        pb="20px"
        px="4"
        position="relative"
        width="full"
        bg="white"
      >
        {/* Pictogramme */}
        <Image src={Picto1} boxSize="60px" position="absolute" top="-30px" left="50%" transform="translateX(-50%)" />

        <Text fontSize="md" fontWeight="bold" mt="75px">
          chauffage
        </Text>
      </Box>

      {/* Prix */}
      <Box
        width="full"
        bg="white"
        py="2"
        borderTop="2px solid #a5bbd4"
      >
        <Text fontSize="3xl" fontWeight="bold">
          {price}
        </Text>
        <Text fontSize="sm">
          {unit}
        </Text>
      </Box>
    </VStack>
  );
};

export default DisplayCard;

