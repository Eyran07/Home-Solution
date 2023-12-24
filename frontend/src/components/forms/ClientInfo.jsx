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
import IconCard from "../layouts/IconCard";
import Counter from "../../assets/Counter";
import happy from '../../assets/happy.png';
import Picto1 from "../../assets/picto-client-info/statut-d’occupation/Picto-1.png";
import Picto2 from "../../assets/picto-client-info/statut-d’occupation/Picto-2.png";
import Picto3 from "../../assets/picto-client-info/statut-d’occupation/Picto-3.png";
import Picto4 from "../../assets/picto-client-info/statut-d’occupation/Picto-4.png";
import PictoOccupation from "../../assets/picto-client-info/Nombre d’occupants/Picto-1.png";
import PictoConstruction from "../../assets/picto-client-info/année de construction/Picto-1.png";
import PictoSol from "../../assets/picto-client-info/surface au sol/Picto-1.png";
import PictoHabitable from "../../assets/picto-client-info/surface habitable/Picto-1.png";
import PictoPieces from "../../assets/picto-client-info/nombre de pièces/Picto-1.png";
import PictoPosition1 from "../../assets/picto-client-info/positionnement de la maison/Picto-1.png";
import PictoPosition2 from "../../assets/picto-client-info/positionnement de la maison/Picto-2.png";
import PictoPosition3 from "../../assets/picto-client-info/positionnement de la maison/Picto-3.png";
import PictoMaison1 from "../../assets/picto-client-info/forme de la maison/Picto-1.png";
import PictoMaison2 from "../../assets/picto-client-info/forme de la maison/Picto-2.png";
import PictoMaison3 from "../../assets/picto-client-info/forme de la maison/Picto-3.png";
import PictoHabitables1 from "../../assets/picto-client-info/nombre de niveaux habitables/Picto-1.png";
import PictoHabitables2 from "../../assets/picto-client-info/nombre de niveaux habitables/Picto-2.png";
import PictoHabitables3 from "../../assets/picto-client-info/nombre de niveaux habitables/Picto-3.png";

const ClientInfo = ({ onSubmit }) => {
  const [formData, setFormData] = useContext(HomeContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleOccupationChange = (nextValue) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      occupationType: nextValue,
    }));
  };
  const optionsOccupation = [
    {
      label: "Propriétaire occupant",
      value: "Propriétaire occupant",
      icon: Picto1,
    },
    {
      label: "Propriétaire d'une résidence secondaire",
      value: "Propriétaire d'une résidence secondaire",
      icon: Picto2,
    },
    {
      label: "Propriétaire bailleur",
      value: "Propriétaire bailleur",
      icon: Picto3,
    },
    { label: "Locataire", value: "Locataire", icon: Picto4 },
  ];

  const housePositionOptions = [
    { label: "1", value: "1", icon: PictoPosition1 },
    { label: "2", value: "2", icon: PictoPosition2 },
    { label: "3", value: "3", icon: PictoPosition3 },
  ];

  const houseShapeOptions = [
    { label: "Carrée", value: "Carrée", icon: PictoMaison1 },
    { label: "Allongée", value: "Allongée", icon: PictoMaison2 },
    { label: "Développée", value: "Développée", icon: PictoMaison3 },
  ];

  const numberOfLevelsOptions = [
    { label: "1", value: "1", icon: PictoHabitables1 },
    { label: "2", value: "2", icon: PictoHabitables2 },
    { label: "3", value: "3", icon: PictoHabitables3 },
  ];
  const {
    getRootProps: occupationGroupProps,
    getRadioProps: occupationRadioProps,
  } = useRadioGroup({
    name: "occupationType",
    defaultValue: "",
    onChange: handleOccupationChange,
  });
  const {
    getRootProps: houseShapeGroupProps,
    getRadioProps: houseShapeRadioProps,
  } = useRadioGroup({
    name: "houseShape",
    defaultValue: "",
    onChange: (value) => handleRadioChange("houseShape", value),
  });
  const {
    getRootProps: housePositionGroupProps,
    getRadioProps: housePositionRadioProps,
  } = useRadioGroup({
    name: "housePosition",
    defaultValue: "",
    onChange: (value) => handleRadioChange("housePosition", value),
  });
  const {
    getRootProps: numberOfLevelsGroupProps,
    getRadioProps: numberOfLevelsRadioProps,
  } = useRadioGroup({
    name: "numberOfLevels",
    defaultValue: "",
    onChange: (value) => handleRadioChange("numberOfLevels", value),
  });

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
    setFormData((prevFormData) => ({
      ...prevFormData,
      numberOfRooms: newCount,
    }));
  };
  const handleRadioChange = (name, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        backgroundImage={`url(${happy})`}
        backgroundSize="cover" // Ajustez selon vos besoins
        p={'58px'}
        width="full"
      >
        <VStack  spacing={4} width="60%">
          {" "}
          {/* Adjust the width as per your design */}
          <FormControl >
            <Select
              // placeholder="Sélectionnez une option"
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
            bgColor={"#15af97"}
            borderRadius={"25px"}
          >
            <Heading size={"lg"}>TYPE D'OCCUPATION</Heading>
          </Box>
          <Heading size="mg" color="#a5bbd4">
            STATUT D’OCCUPATION
          </Heading>
          <Stack {...occupationGroupProps()} direction="row">
            {optionsOccupation.map((option) => (
              <RadioCard
                key={option.value}
                {...occupationRadioProps({ value: option.value })}
                icon={option.icon}
              >
                {option.label}
              </RadioCard>
            ))}
          </Stack>
          <Heading size={"mg"} color={"#a5bbd4"}>
            NOMBRE D’OCCUPANTS
          </Heading>
          <IconCard icon={PictoOccupation} />
          <Counter onCountChange={handleNumberOfOccupantsChange} />
          <Box
            display={"flex"}
            color={"white"}
            w={"550px"}
            justifyContent={"center"}
            bgColor={"#15af97"}
            borderRadius={"25px"}
          >
            <Heading size={"lg"}>ARCHITECTURE DE LA MAISON</Heading>
          </Box>
          <Heading size={"mg"} color={"#a5bbd4"}>
            ANNÉE DE CONSTRUCTION
          </Heading>
          <IconCard icon={PictoConstruction} />
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
              <Heading size="mg" color="#a5bbd4">
                SURFACE AU SOL (M2)
              </Heading>
              <IconCard icon={PictoSol} />

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

            <Box
              display={"flex"}
              alignItems={"center"}
              ml={"70px"}
              flexDirection={"column"}
            >
              <Heading size="mg" color="#a5bbd4">
                SURFACE HABITABLE (M2)
              </Heading>
              <IconCard icon={PictoHabitable} />

              <NumberInput
                name="surfaceHabitable"
                width="140px"
                mt={"20px"}
                onChange={(valueAsString, valueAsNumber) =>
                  handleSurfaceChange("surfaceHabitable", valueAsNumber)
                }
                value={formData.surfaceHabitable}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Box>
          </Box>
          <Heading size={"mg"} color={"#a5bbd4"}>
            NOMBRE DE PIÈCES
          </Heading>
          <IconCard icon={PictoPieces} />

          <Counter
            onCountChange={handleNumberOfRoomsChange}
            currentCount={formData.numberOfRooms}
          />
          <Heading size={"mg"} color={"#a5bbd4"}>
            POSITIONNEMENT DE LA MAISON
          </Heading>
          <Stack {...housePositionGroupProps()} direction="row">
            {housePositionOptions.map((option) => (
              <RadioCard
                key={option.value}
                {...housePositionRadioProps({ value: option.value })}
                icon={option.icon}
              >
                {option.label}
              </RadioCard>
            ))}
          </Stack>
          <Heading size="mg" color="#a5bbd4">
            FORME DE LA MAISON
          </Heading>
          <Stack {...houseShapeGroupProps()} direction="row">
            {houseShapeOptions.map((option) => (
              <RadioCard
                key={option.value}
                {...houseShapeRadioProps({ value: option.value })}
                icon={option.icon}
              >
                {option.label}
              </RadioCard>
            ))}
          </Stack>

          <Heading size="mg" color="#a5bbd4">
            NOMBRE DE NIVEAUX HABITABLES (HORS COMBLES)
          </Heading>
          <Stack {...numberOfLevelsGroupProps()} direction="row">
            {numberOfLevelsOptions.map((option) => (
              <RadioCard
                key={option.value}
                {...numberOfLevelsRadioProps({ value: option.value })}
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

export default ClientInfo;
