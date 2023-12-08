import React from 'react';
import { Box, Button } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import PageHeading from '../components/layouts/PageHeading';
import ProgressBar from '../components/ProgressBar';
import ClientInfo from '../components/forms/ClientInfo';

const formSections = ['VOS INFORMATIONS', 'VOTRE AUDIT ÉNERGÉTIQUE', 'NOS SOLUTIONS ÉNERGÉTIQUES', 'VOS ÉCONOMIES ET AIDES'];

const PartOne = () => {
  const navigate = useNavigate();
  const currentSection = 0; // Index of the current section for the progress bar

  const handleFormSubmit = (formData) => {
    // Form submission logic
    // For example, send formData to the backend here
    console.log(formData);

    // After form submission logic, navigate to the next part
    navigate('/client-audit'); // Or '/client-audit' if that's the intended route
  };

  return (
    <Box width="full">
      <PageHeading title={formSections[currentSection]} />
      <ProgressBar sections={formSections} currentSection={currentSection} />
      <ClientInfo onSubmit={handleFormSubmit} />
    </Box>
  );
};

export default PartOne;