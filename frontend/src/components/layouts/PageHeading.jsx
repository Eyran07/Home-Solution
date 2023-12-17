import React from 'react';
import { Heading, Box } from "@chakra-ui/react";

const PageHeading = ({ title }) => {
  return (
    <Box
      width="100%" // Full width
      bg="#a5bbd4" // Sky #a5bbd4 background
      color="white" // White text color
      mb={6}
    >
      <Heading as="h2" size="xl" textAlign={'center'} fontWeight="bold" p={5}>
        {title}
      </Heading>
    </Box>
  );
};

export default PageHeading;
