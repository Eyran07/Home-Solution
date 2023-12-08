import React from 'react';
import { Box, Button } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import PageHeading from '../components/layouts/PageHeading';
import ProgressBar from '../components/ProgressBar';
import ClientAudit from '../components/forms/ClientAudit';

const formSections = ['VOS INFORMATIONS', 'VOTRE AUDIT ÉNERGÉTIQUE', 'NOS SOLUTIONS ÉNERGÉTIQUES', 'VOS ÉCONOMIES ET AIDES'];

const PartTwo = () => {
  const navigate = useNavigate();
  const currentSection = 1; // Index of the current section for the progress bar

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Form submission logic
    navigate('/part-two'); // Assuming you have a route set up for the second part
  };

  return (
    <Box width="full">
      <PageHeading title={formSections[currentSection]} />
      <ProgressBar sections={formSections} currentSection={currentSection} />
      <ClientAudit onSubmit={handleFormSubmit} />
      <Button
        mt={4}
        colorScheme="teal"
        onClick={() => navigate('/client-audit')}
      >
        Continue to Part 3
      </Button>
    </Box>
  );
};

export default PartTwo;
