import React from 'react';
import { Box, Flex, Text } from "@chakra-ui/react";

const ProgressBar = ({ sections, currentSection }) => {
  return (
    <Flex
      direction="row"
      justify="center"
      align="center"
      mb={4}
      width="full" // Take full width of the container
      px="10%" // Equivalent to start at 10% and end at 10%, thus the inner content is from 30% to 90%
    >
      {sections.map((section, index) => (
        <Flex key={section} direction="column" align="center" flex="1">
          <Box
            width="100%"
            maxWidth={{ base: "60%", md: "full" }} // Adjust based on responsive design
            height="4px"
            bg={index <= currentSection ? "blue.500" : "gray.200"}
            transition="background-color 0.3s"
          />
          <Text
            color={index <= currentSection ? "blue.500" : "gray.500"}
            fontSize="sm"
            mt={2}
          >
            {section}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default ProgressBar;
