import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

const IconCard = ({ icon, label }) => {
  return (
    <Box width="150px" m={1} textAlign="center">
      <Box
        h={'150px'}
        borderWidth="1.6px"
        borderRadius="20px"
        boxShadow="md"
        borderColor={'gray.500'}
        p={3}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Image src={icon} boxSize="90px" />
      </Box>
      <Text fontSize="sm" mt={2} color="gray.800">{label}</Text>
    </Box>
  );
};

export default IconCard;