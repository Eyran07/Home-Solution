import React, { useContext, useState } from "react";
import {
  FormControl,
  Input,
  Button,
  VStack,
  Select,
  Box,
  Stack,
  Radio,
  Image,
  RadioGroup,
  Heading,
  useRadioGroup,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { HomeContext } from "../../context/HomeContext";
import RadioCard from "../layouts/RadioCard";
import PictoInstallation1 from '../../assets/picto-audit/type d’installation électrique/Picto-1.png'
import PictoInstallation2 from '../../assets/picto-audit/type d’installation électrique/Picto-2.png'

const ClientAudit = ({ onSubmit }) => {
  const [formData, setFormData] = useContext(HomeContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
    console.log(formData);
  };

  const handleInstallationChange = (nextValue) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      installationType: nextValue,
    }));
  };
  const {
    getRootProps: installationGroupProps,
    getRadioProps: installationRadioProps,
  } = useRadioGroup({
    name: "installationType",
    defaultValue: "",
    onChange: handleInstallationChange,
  });
  const optionsInstallation = [
    {
      label: "Propriétaire occupant",
      value: "Propriétaire occupant",
      icon: PictoInstallation1,
    },
    {
      label: "Propriétaire d'une résidence secondaire",
      value: "Propriétaire d'une résidence secondaire",
      icon: PictoInstallation2,
    },
  ];

  return (
    <form onSubmit={handleSubmit}>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        p={5}
        width="full"
        mt={"10px"}
        mb={"10px"}
      >
        <VStack spacing={4} width="60%">
          <Box
            display={"flex"}
            color={"white"}
            w={"550px"}
            justifyContent={"center"}
            bgColor={"#15af97"}
            borderRadius={"25px"}
          >
            <Heading size={"xl"}>TYPE D'OCCUPATION</Heading>
          </Box>
          <Heading size="md" color="#a5bbd4">
            Type d'installation electrique
          </Heading>
          <Stack {...installationGroupProps()} direction="row">
            {optionsInstallation.map((option) => (
              <RadioCard
                key={option.value}
                {...installationRadioProps({ value: option.value })}
                icon={option.icon}
              >
                {option.label}
              </RadioCard>
            ))}
          </Stack>
          <Button colorScheme="blue" type="submit">
            Valider
          </Button>
        </VStack>
      </Box>
    </form>
  );
};

export default ClientAudit;
