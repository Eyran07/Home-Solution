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
  RadioGroup,
  Heading,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { HomeContext } from "../../context/HomeContext";
import Counter from "../../assets/Counter";

const ClientInfo = ({ onSubmit }) => {
  const [formData, setFormData] = useContext(HomeContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [value, setValue] = React.useState("1");

  const handleOccupationChange = (nextValue) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      occupationType: nextValue,
    }));
  };
  const handleNumberOfOccupantsChange = (newCount) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      numberOfOccupants: newCount,
    }));
  };
  const handleConstructionYearChange = (valueAsString, valueAsNumber) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      constructionYear: valueAsNumber,
    }));
  };
  const handleSurfaceChange = (name, valueAsNumber) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: valueAsNumber,
    }));
  };
  const handleNumberOfRoomsChange = (newCount) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      numberOfRooms: newCount
    }));
  };
  const handleRadioChange = (name, value) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
    // You may also want to include occupancyType and number of occupants in formData
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        backgroundColor={"blue.100"} // Adjust the color to match your theme or design
        p={5}
        width="full"
      >
        <VStack spacing={4} width="60%">
          {" "}
          {/* Adjust the width as per your design */}
          <FormControl>
            <Select
              placeholder="Sélectionnez une option"
              name="title"
              onChange={handleChange}
            >
              <option value="mr">Monsieur</option>
              <option value="mrs">Madame</option>
            </Select>
          </FormControl>
          <FormControl>
            <Input placeholder="Nom" name="nom" onChange={handleChange} />
          </FormControl>
          <FormControl>
            <Input placeholder="Prénom" name="prenom" onChange={handleChange} />
          </FormControl>
          <FormControl>
            <Input
              placeholder="Adresse"
              name="adresse"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <Input placeholder="Ville" name="ville" onChange={handleChange} />
          </FormControl>
          <FormControl>
            <Input
              placeholder="Département"
              name="departement"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <Input placeholder="Région" name="region" onChange={handleChange} />
          </FormControl>
          <FormControl>
            <Input placeholder="Email" name="email" onChange={handleChange} />
          </FormControl>
          <FormControl>
            <Input
              placeholder="Téléphone 1"
              name="tel1"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <Input
              placeholder="Téléphone 2"
              name="tel2"
              onChange={handleChange}
            />
          </FormControl>
        </VStack>
      </Box>
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
            bgColor={"green.500"}
            borderRadius={"25px"}
          >
            <Heading size={"lg"}>TYPE D'OCCUPATION</Heading>
          </Box>
          <Heading size={"mg"} color={"gray"}>
            STATUT D’OCCUPATION
          </Heading>
          <RadioGroup
            name="occupationType"
            onChange={handleOccupationChange}
            value={formData.occupationType}
          >
            <Stack direction="row">
              <Radio value="Propriétaire occupant">Propriétaire occupant</Radio>
              <Radio value="Propriétaire d'une résidence secondaire">
                Propriétaire d'une résidence secondaire
              </Radio>
              <Radio value="Propriétaire bailleur">Propriétaire bailleur</Radio>
              <Radio value="Locataire">Locataire</Radio>
            </Stack>
          </RadioGroup>
          <Heading size={"mg"} color={"gray"}>
            NOMBRE D’OCCUPANTS
          </Heading>
          <Counter onCountChange={handleNumberOfOccupantsChange} />
          <Box
            display={"flex"}
            color={"white"}
            w={"550px"}
            justifyContent={"center"}
            bgColor={"green.500"}
            borderRadius={"25px"}
          >
            <Heading size={"lg"}>ARCHITECTURE DE LA MAISON</Heading>
          </Box>
          <Heading size={"mg"} color={"gray"}>
            ANNÉE DE CONSTRUCTION
          </Heading>
          <NumberInput
            width="140px"
            onChange={handleConstructionYearChange}
            value={formData.constructionYear}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Box display={"flex"} flexDirection={"row"}>
            <Box
              display={"flex"}
              alignItems={"center"}
              flexDirection={"column"}
            >
              <Heading size="mg" color="gray">
                SURFACE AU SOL (M2)
              </Heading>
              <NumberInput
                name="surfaceAuSol"
                width="140px"
                mt={"20px"}
                onChange={(valueAsString, valueAsNumber) =>
                  handleSurfaceChange("surfaceAuSol", valueAsNumber)
                }
                value={formData.surfaceAuSol}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Box>

            <Box display={"flex"} alignItems={"center"} ml={"70px"} flexDirection={"column"}>
          <Heading size="mg" color="gray">
            SURFACE HABITABLE (M2)
          </Heading>
          <NumberInput name="surfaceHabitable" width="140px" mt={"20px"} onChange={(valueAsString, valueAsNumber) => handleSurfaceChange('surfaceHabitable', valueAsNumber)} value={formData.surfaceHabitable}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Box>
      </Box>
          <Heading size={"mg"} color={"gray"}>
            NOMBRE DE PIÈCES
          </Heading>
          <Counter onCountChange={handleNumberOfRoomsChange} currentCount={formData.numberOfRooms} />
          <Heading size={"mg"} color={"gray"}>
            POSITIONNEMENT DE LA MAISON
          </Heading>
          <Heading size="mg" color="gray">
        FORME DE LA MAISON
      </Heading>
      <RadioGroup name="houseShape" onChange={(value) => handleRadioChange('houseShape', value)} value={formData.houseShape}>
        <Stack direction="row">
          <Radio value="Carrée">Carrée</Radio>
          <Radio value="Allongée">Allongée</Radio>
          <Radio value="Développée">Développée</Radio>
        </Stack>
      </RadioGroup>
      
      <Heading size="mg" color="gray">
        NOMBRE DE NIVEAUX HABITABLES (HORS COMBLES)
      </Heading>
      <RadioGroup name="numberOfLevels" onChange={(value) => handleRadioChange('numberOfLevels', value)} value={formData.numberOfLevels}>
        <Stack direction="row">
          <Radio value="1">1</Radio>
          <Radio value="2">2</Radio>
          <Radio value="3">3</Radio>
        </Stack>
      </RadioGroup>
          <Button colorScheme="blue" type="submit">
            Valider
          </Button>
        </VStack>
      </Box>
    </form>
  );
};

export default ClientInfo;
