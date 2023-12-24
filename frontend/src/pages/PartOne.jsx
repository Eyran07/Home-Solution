import React from 'react';
import { Box, Button } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import PageHeading from '../components/layouts/PageHeading';
import ProgressBar from '../components/ProgressBar';
import ClientInfo from '../components/forms/ClientInfo';

const formSections = ['VOS INFORMATIONS', 'VOTRE AUDIT ÉNERGÉTIQUE', 'NOS SOLUTIONS ÉNERGÉTIQUES', 'VOS ÉCONOMIES ET AIDES'];

const PartOne = () => {
  const navigate = useNavigate();
  const currentSection = 0;

  const handleFormSubmit = (formData) => {
    console.log(formData);
    navigate('/client-audit');
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