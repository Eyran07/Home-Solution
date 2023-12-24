import React from 'react';
import { Box, Button } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import PageHeading from '../components/layouts/PageHeading';
import ProgressBar from '../components/ProgressBar';
import ClientEnergetique from '../components/forms/ClientEnergetique';

const formSections = ['VOS INFORMATIONS', 'VOTRE AUDIT ÉNERGÉTIQUE', 'NOS SOLUTIONS ÉNERGÉTIQUES', 'VOS ÉCONOMIES ET AIDES'];

const PartTwo = () => {
  const navigate = useNavigate();
  const currentSection = 2; // Index of the current section for the progress bar

  const handleFormSubmit = (formData) => {
    console.log(formData);
    navigate('/client-energetique'); // Assuming you have a route set up for the second part
  };

  return (
    <Box width="full">
      <PageHeading title={formSections[currentSection]} />
      <ProgressBar sections={formSections} currentSection={currentSection} />
      <ClientEnergetique onSubmit={handleFormSubmit} />
    </Box>
  );
};

export default PartTwo;