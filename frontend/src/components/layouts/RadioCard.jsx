import React from 'react';
import { Box, Image, useRadio, Text } from '@chakra-ui/react';

const RadioCard = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label" width="150px" m={1} textAlign="center">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        h={'150px'}
        borderWidth="1.6px"
        borderRadius="20px"
        boxShadow="md"
        borderColor={'gray.500'}
        _checked={{
          bg: "green.500", // Couleur de fond lorsque l'option est sélectionnée
          borderColor:'blue.500',
        }}
        p={3}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Image src={props.icon} boxSize="90px" />
      </Box>
      <Text fontSize="sm" mt={2} color="gray.800">{props.children}</Text>
    </Box>
  );
};

export default RadioCard;
