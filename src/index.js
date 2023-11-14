import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from "@chakra-ui/react"; // Don't forget to import ChakraProvider
import AppRouter from './AppRouter';
import mainTheme from './themes/Main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={mainTheme}> {/* Wrap your AppRouter with ChakraProvider and pass your mainTheme as theme prop */}
      <AppRouter />
    </ChakraProvider>
  </React.StrictMode>
);
