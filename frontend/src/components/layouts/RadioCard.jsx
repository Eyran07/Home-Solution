import React from 'react';
import { Box, Image, useRadio, Text } from '@chakra-ui/react';

const RadioCard = (props) => {
  // Utilisez useRadio pour obtenir les propriétés d'entrée et de case à cocher
  const { getInputProps, getCheckboxProps } = useRadio(props);
  
  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label" width="150px" m={1} textAlign="center">
      {/* L'input de type checkbox est masqué et gère l'état de sélection */}
      <input {...input} />
      <Box
        {...checkbox} // Appliquez les propriétés de checkbox ici
        cursor="pointer"
        h={'150px'}
        borderWidth="1.6px"
        borderRadius="20px"
        boxShadow="md"
        borderColor={'#a5bbd4'}
        _checked={{
          bg: "#15af97",
          borderColor: '#a5bbd4',
        }}
        p={3}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        // La fonction onChange devrait être déclenchée lorsque l'utilisateur clique sur la boîte
        onClick={() => props.onChange(props.value)}
      >
        <Image src={props.icon} boxSize="90px" />
      </Box>
      <Text fontSize="sm" mt={2} color="#a5bbd4">{props.children}</Text>
    </Box>
  );
};

export default RadioCard;

