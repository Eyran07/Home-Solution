import { Button, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';

const Counter = ({ onCountChange }) => {
   const [count, setCount] = useState(1);
 
   const handleClickMinus = () => {
     if (count > 1) {
       const newCount = count - 1;
       setCount(newCount);
       onCountChange(newCount);
     }
   };
 
   const handleClickPlus = () => {
     const newCount = count + 1;
     setCount(newCount);
     onCountChange(newCount);
   };

   return (
      <Flex
         align="center"
         justify="center"
         border="1px solid #C7C9D9"
         gap="16px"
         borderRadius="5px"
         width="140px"
         height="50px"
      >
         <Button
            backgroundColor="#f5f6f8"
            color="#676879"
            border="none"
            borderRadius="50%"
            width="25px"
            height="38px"
            fontWeight="semibold"
            bg="#f5f6f7"
            borderColor="#ccd0d5"
            _hover={{ bg: '#E1E5FC', color: 'blue' }}
            _active={{
               bg: '#dddfe2',
               transform: 'scale(0.98)',
               borderColor: '#bec3c9',
            }}
            onClick={handleClickMinus}
         >
            -
         </Button>
         <Flex
            fontSize="18px"
            marginRight="4px"
            fontWeight="400"
            color="#555770"
         >
            {count}
         </Flex>
         <Button
            backgroundColor="#f5f6f8"
            color="#676879"
            border="none"
            borderRadius="50%"
            width="25px"
            height="38px"
            fontWeight="semibold"
            bg="#f5f6f7"
            borderColor="#ccd0d5"
            _hover={{ bg: '#E1E5FC', color: 'blue' }}
            _active={{
               bg: '#E1E5FC',
               transform: 'scale(0.98)',
               borderColor: '#bec3c9',
            }}
            onClick={handleClickPlus}
         >
            +
         </Button>
      </Flex>
   );
};

export default Counter;
