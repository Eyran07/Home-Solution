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
        borderColor={'#a5bbd4'}
        _checked={{
          bg: "#15af97", // Couleur de fond lorsque l'option est sélectionnée
          borderColor:'#a5bbd4',
        }}
        p={3}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Image src={props.icon} boxSize="90px" />
      </Box>
      <Text fontSize="sm" mt={2} color="#a5bbd4">{props.children}</Text>
    </Box>
  );
};

export default RadioCard;
