import React from 'react';
import { Text, Link, Button } from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom'

const Home = () => {

  return (
    <>
      <Text>Home Solution Energy</Text>
      <Button>
      <Link as={ReactRouterLink} to={'/client-info'} >Start the process</Link></Button>
    </>
  )
};

export default Home;