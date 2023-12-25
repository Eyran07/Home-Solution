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
import DisplayCost from "../../components/layouts/DisplayCost";
import PictoInstallation1 from "../../assets/picto-audit/type d’installation électrique/Picto-1.png";
import PictoInstallation2 from '../../assets/picto-audit/type d’installation électrique/Picto-2.png';
import PictoProtection1 from "../../assets/picto-audit/sensibilité à l’environnement/Picto-1.png";
import PictoProtection2 from "../../assets/picto-audit/sensibilité à l’environnement/Picto-2.png";
import PictoProtection3 from "../../assets/picto-audit/sensibilité à l’environnement/Picto-3.png";
import PictoProtection4 from "../../assets/picto-audit/sensibilité à l’environnement/Picto-4.png";
import PictoProtection5 from "../../assets/picto-audit/sensibilité à l’environnement/Picto-5.png";
import PictoAmpoule1 from "../../assets/picto-audit/type d’ampoule/Picto-1.png";
import PictoAmpoule2 from "../../assets/picto-audit/type d’ampoule/Picto-2.png";
import PictoAmpoule3 from "../../assets/picto-audit/type d’ampoule/Picto-3.png";
import PictoEnergie1 from "../../assets/picto-audit/eau chaude sanitaire/Picto-1.png";
import PictoEnergie2 from "../../assets/picto-audit/eau chaude sanitaire/Picto-2.png";
import PictoEnergie3 from "../../assets/picto-audit/eau chaude sanitaire/Picto-3.png";
import PictoEnergie4 from "../../assets/picto-audit/eau chaude sanitaire/Picto-4.png";
import PictoEnergie5 from "../../assets/picto-audit/eau chaude sanitaire/Picto-5.png";
import PictoSanitaire1 from "../../assets/picto-audit/type d’eau chaude sanitaire/Picto-1.png";
import PictoSanitaire2 from "../../assets/picto-audit/type d’eau chaude sanitaire/Picto-2.png";
import PictoSanitaire3 from "../../assets/picto-audit/type d’eau chaude sanitaire/Picto-3.png";
import PictoSanitaire4 from "../../assets/picto-audit/type d’eau chaude sanitaire/Picto-4.png";
import PictoStockage1 from "../../assets/picto-audit/capacité de stockage/Picto-1.png";
import PictoStockage2 from "../../assets/picto-audit/capacité de stockage/Picto-2.png";
import PictoStockage3 from "../../assets/picto-audit/capacité de stockage/Picto-3.png";
import PictoStockage4 from "../../assets/picto-audit/capacité de stockage/Picto-4.png";
import PictoStockage5 from "../../assets/picto-audit/capacité de stockage/Picto-5.png";
import PictoUse1 from "../../assets/picto-audit/utilisation de l’eau chaude sanitaire/Picto-1.png";
import PictoUse2 from "../../assets/picto-audit/utilisation de l’eau chaude sanitaire/Picto-2.png";
import PictoUse3 from "../../assets/picto-audit/utilisation de l’eau chaude sanitaire/Picto-3.png";
import PictoUse4 from "../../assets/picto-audit/utilisation de l’eau chaude sanitaire/Picto-4.png";
import PictoUse5 from "../../assets/picto-audit/utilisation de l’eau chaude sanitaire/Picto-5.png";
import PictoChauffage1 from "../../assets/picto-audit/Type de chauffage/Picto-1.png";
import PictoChauffage2 from "../../assets/picto-audit/Type de chauffage/Picto-2.png";
import PictoChauffage3 from "../../assets/picto-audit/Type de chauffage/Picto-3.png";
import PictoChauffage4 from "../../assets/picto-audit/Type de chauffage/Picto-4.png";
import PictoChauffage5 from "../../assets/picto-audit/Type de chauffage/Picto-5.png";
import PictoChauffage6 from "../../assets/picto-audit/Type de chauffage/Picto-6.png";
import PictoChauffage7 from "../../assets/picto-audit/Type de chauffage/Picto-7.png";
import PictoChauffage8 from "../../assets/picto-audit/Type de chauffage/Picto-8.png";
import PictoChauffage9 from "../../assets/picto-audit/Type de chauffage/Picto-9.png";
import PictoChauffage10 from "../../assets/picto-audit/Type de chauffage/Picto-10.png";
import PictoChauffages1 from "../../assets/picto-audit/Utilisation du chauffage/Picto-1.png";
import PictoChauffages2 from "../../assets/picto-audit/Utilisation du chauffage/Picto-2.png";
import PictoChauffages3 from "../../assets/picto-audit/Utilisation du chauffage/Picto-3.png";
import PictoChauffages4 from "../../assets/picto-audit/Utilisation du chauffage/Picto-4.png";
import PictoChauffages5 from "../../assets/picto-audit/Utilisation du chauffage/Picto-5.png";
import PictoPeriode1 from "../../assets/picto-audit/période(s) d’utilisation (choix multiple)/Picto-1.png";
import PictoPeriode2 from "../../assets/picto-audit/période(s) d’utilisation (choix multiple)/Picto-2.png";
import PictoPeriode3 from "../../assets/picto-audit/période(s) d’utilisation (choix multiple)/Picto-3.png";

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
      label: "Monophasé",
      value: "Monophasé",
      icon: PictoInstallation1,
    },
    {
      label: "Triphasé",
      value: "Triphasé",
      icon: PictoInstallation2,
    },
  ];

  const handleProtectionChange = (nextValue) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      protectionType: nextValue,
    }));
  };
  const {
    getRootProps: protectionGroupProps,
    getRadioProps: protectionRadioProps,
  } = useRadioGroup({
    name: "protectionType",
    defaultValue: "",
    onChange: handleProtectionChange,
  });
  const optionsProtection = [
    {
      label: "Pas sensible",
      value: "Pas sensible",
      icon: PictoProtection1,
    },
    {
      label: "Peu sensible",
      value: "Peu sensible",
      icon: PictoProtection2,
    },
    {
      label: "Sensible",
      value: "Sensible",
      icon: PictoProtection3,
    },
    {
      label: "Très sensible",
      value: "Très sensible",
      icon: PictoProtection4,
    },
    {
      label: "Extrêment sensible",
      value: "Extrêment sensible",
      icon: PictoProtection5,
    },
  ];

  const handleAmpouleChange = (nextValue) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      ampouleType: nextValue,
    }));
  };
  const { getRootProps: ampouleGroupProps, getRadioProps: ampouleRadioProps } =
    useRadioGroup({
      name: "ampouleType",
      defaultValue: "",
      onChange: handleAmpouleChange,
    });
  const optionsAmpoule = [
    {
      label: "Ampoule incandescente",
      value: "Ampoule incandescente",
      icon: PictoAmpoule1,
    },
    {
      label: "Ampoule LED",
      value: "Ampoule LED",
      icon: PictoAmpoule2,
    },
    {
      label: "Mixte incandescente/LED",
      value: "Mixte incandescente/LED",
      icon: PictoAmpoule3,
    },
  ];

  const handleEnergieChange = (nextValue) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      energieType: nextValue,
    }));
  };
  const { getRootProps: energieGroupProps, getRadioProps: energieRadioProps } =
    useRadioGroup({
      name: "energieType",
      defaultValue: "",
      onChange: handleEnergieChange,
    });
  const optionsEnergie = [
    {
      label: "Électricité",
      value: "Électricité",
      icon: PictoEnergie1,
    },
    {
      label: "Gaz naturel",
      value: "Gaz naturel",
      icon: PictoEnergie2,
    },
    {
      label: "GPL",
      value: "GPL",
      icon: PictoEnergie3,
    },
    {
      label: "Fioul",
      value: "Fioul",
      icon: PictoEnergie4,
    },
    {
      label: "Bois",
      value: "Bois",
      icon: PictoEnergie5,
    },
  ];

  const handleSanitaireChange = (nextValue) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      sanitaireType: nextValue,
    }));
  };
  const {
    getRootProps: sanitaireGroupProps,
    getRadioProps: sanitaireRadioProps,
  } = useRadioGroup({
    name: "sanitaireType",
    defaultValue: "",
    onChange: handleSanitaireChange,
  });
  const optionsSanitaire = [
    {
      label: "Chauffe-eau électrique",
      value: "Chauffe-eau électrique",
      icon: PictoSanitaire1,
    },
    {
      label: "Chauffe-eau thermodynamique",
      value: "Chauffe-eau thermodynamique",
      icon: PictoSanitaire2,
    },
    {
      label: "Module ECS intégré à PAC",
      value: "Module ECS intégré à PAC",
      icon: PictoSanitaire3,
    },
    {
      label: "Chauffe-eau solaire",
      value: "Chauffe-eau solaire",
      icon: PictoSanitaire4,
    },
  ];

  const handleStockageChange = (nextValue) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      stockageType: nextValue,
    }));
  };
  const {
    getRootProps: stockageGroupProps,
    getRadioProps: stockageRadioProps,
  } = useRadioGroup({
    name: "stockageType",
    defaultValue: "",
    onChange: handleStockageChange,
  });
  const optionsStockage = [
    {
      label: "Pas de stockage",
      value: "Pas de stockage",
      icon: PictoStockage1,
    },
    {
      label: "150 litres",
      value: "150 litres",
      icon: PictoStockage2,
    },
    {
      label: "200 litres",
      value: "200 litres",
      icon: PictoStockage3,
    },
    {
      label: "250 litres",
      value: "250 litres",
      icon: PictoStockage4,
    },
    {
      label: "300 litres et plus",
      value: "300 litres et plus",
      icon: PictoStockage5,
    },
  ];

  const handleUseChange = (nextValue) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      installationType: nextValue,
    }));
  };
  const { getRootProps: useGroupProps, getRadioProps: usesRadioProps } =
    useRadioGroup({
      name: "useType",
      defaultValue: "",
      onChange: handleUseChange,
    });
  const optionsUse = [
    {
      label: "Sobre",
      value: "Sobre",
      icon: PictoUse1,
    },
    {
      label: "Modérée",
      value: "Modérée",
      icon: PictoUse2,
    },
    {
      label: "Normale",
      value: "Normale",
      icon: PictoUse3,
    },
    {
      label: "Intensive",
      value: "Intensive",
      icon: PictoUse4,
    },
    {
      label: "Balnéo",
      value: "Balnéo",
      icon: PictoUse5,
    },
  ];

  const handleSourceChange = (nextValue) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      sourceType: nextValue,
    }));
  };
  const { getRootProps: sourceGroupProps, getRadioProps: sourceRadioProps } =
    useRadioGroup({
      name: "sourceType",
      defaultValue: "",
      onChange: handleSourceChange,
    });
  const optionsSource = [
    {
      label: "Électricité",
      value: "Électricité",
      icon: PictoEnergie1,
    },
    {
      label: "Gaz naturel",
      value: "Gaz naturel",
      icon: PictoEnergie2,
    },
    {
      label: "GPL",
      value: "GPL",
      icon: PictoEnergie3,
    },
    {
      label: "Fioul",
      value: "Fioul",
      icon: PictoEnergie4,
    },
    {
      label: "Bois",
      value: "Bois",
      icon: PictoEnergie5,
    },
  ];

  const handleChauffageChange = (nextValue) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      chauffageType: nextValue,
    }));
  };
  const {
    getRootProps: chauffageGroupProps,
    getRadioProps: chauffageRadioProps,
  } = useRadioGroup({
    name: "chauffageType",
    defaultValue: "",
    onChange: handleChauffageChange,
  });
  const optionsChauffage = [
    {
      label: "Convecteur électrique",
      value: "Convecteur électrique",
      icon: PictoChauffage1,
    },
    {
      label: "Plancher chauffant électrique",
      value: "Plancher chauffant électrique",
      icon: PictoChauffage2,
    },
    {
      label: "Radiateur électrique à inertie",
      value: "Radiateur électrique à inertie",
      icon: PictoChauffage3,
    },
    {
      label: "Chaudière électrique",
      value: "Chaudière électrique",
      icon: PictoChauffage4,
    },
    {
      label: "Pompe à chaleur",
      value: "Pompe à chaleur",
      icon: PictoChauffage5,
    },
    {
      label: "Chauffe-eau solaire",
      value: "Chauffe-eau solaire",
      icon: PictoChauffage6,
    },
    {
      label: "Pompe à chaleur Air/Air",
      value: "Pompe à chaleur Air/Air",
      icon: PictoChauffage7,
    },
    {
      label: "Pompe à chaleur Air/Eau",
      value: "Pompe à chaleur Air/Eau",
      icon: PictoChauffage8,
    },
    {
      label: "Pompe à chaleur Eau/Eau",
      value: "Pompe à chaleur Eau/Eau",
      icon: PictoChauffage9,
    },
    {
      label: "Pompe à chaleur géothermique",
      value: "Pompe à chaleur géothermique",
      icon: PictoChauffage10,
    },
  ];

  const handleChauffagesChange = (nextValue) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      chauffagesType: nextValue,
    }));
  };
  const {
    getRootProps: chauffagesGroupProps,
    getRadioProps: chauffagesRadioProps,
  } = useRadioGroup({
    name: "chauffagesType",
    defaultValue: "",
    onChange: handleChauffagesChange,
  });
  const optionsChauffages = [
    {
      label: "Sobre",
      value: "Sobre",
      icon: PictoChauffages1,
    },
    {
      label: "Modérée",
      value: "Modérée",
      icon: PictoChauffages2,
    },
    {
      label: "Normale",
      value: "Normale",
      icon: PictoChauffages3,
    },
    {
      label: "Élevée",
      value: "Élevée",
      icon: PictoChauffages4,
    },
    {
      label: "Très élevée",
      value: "Très élevée",
      icon: PictoChauffages5,
    },
  ];

  const [selectedPeriodes, setSelectedPeriodes] = useState([]);

  const handlePeriodeChange = (value) => {
    setSelectedPeriodes((prevSelectedPeriodes) => {
      if (prevSelectedPeriodes.includes(value)) {
        // Si la valeur est déjà sélectionnée, retirez-la du tableau
        return prevSelectedPeriodes.filter((periode) => periode !== value);
      } else {
        // Sinon, ajoutez-la au tableau
        return [...prevSelectedPeriodes, value];
      }
    });
  };
  const { getRootProps: periodeGroupProps, getRadioProps: periodeRadioProps } =
    useRadioGroup({
      name: "periodeType",
      defaultValue: "",
      onChange: handlePeriodeChange,
    });
  const optionsPeriode = [
    {
      label: "Matin et soir",
      value: "Matin et soir",
      icon: PictoPeriode1,
    },
    {
      label: "Journée",
      value: "Journée",
      icon: PictoPeriode2,
    },
    {
      label: "Nuit",
      value: "Nuit",
      icon: PictoPeriode3,
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
            <Heading size={"lg"}>TYPE D'OCCUPATION</Heading>
          </Box>
          <Heading size="mg" color="#a5bbd4">
            TYPE D’INSTALLATION ÉLECTRIQUE
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
          <Box
            display={"flex"}
            color={"white"}
            w={"650px"}
            justifyContent={"center"}
            bgColor={"#15af97"}
            borderRadius={"25px"}
          >
            <Heading size={"lg"}> SENSIBILITÉ À L’ENVIRONNEMENT</Heading>
          </Box>
          <Heading size="mg" color="#a5bbd4">
            ÊTES-VOUS SENSIBLE À LA PRÉSERVATION DE NOTRE PLANÈTE ?
          </Heading>
          <Stack {...protectionGroupProps()} direction="row">
            {optionsProtection.map((option) => (
              <RadioCard
                key={option.value}
                {...protectionRadioProps({ value: option.value })}
                icon={option.icon}
              >
                {option.label}
              </RadioCard>
            ))}
          </Stack>
          <Heading size="mg" color="#a5bbd4">
            TYPE D’AMPOULE
          </Heading>
          <Stack {...ampouleGroupProps()} direction="row">
            {optionsAmpoule.map((option) => (
              <RadioCard
                key={option.value}
                {...ampouleRadioProps({ value: option.value })}
                icon={option.icon}
              >
                {option.label}
              </RadioCard>
            ))}
          </Stack>
          <Box
            display={"flex"}
            color={"white"}
            w={"550px"}
            justifyContent={"center"}
            bgColor={"#15af97"}
            borderRadius={"25px"}
          >
            <Heading size={"lg"}> EAU CHAUDE SANITAIRE</Heading>
          </Box>
          <Heading size="mg" color="#a5bbd4">
            SOURCE D’ÉNERGIE
          </Heading>
          <Stack {...energieGroupProps()} direction="row">
            {optionsEnergie.map((option) => (
              <RadioCard
                key={option.value}
                {...energieRadioProps({ value: option.value })}
                icon={option.icon}
              >
                {option.label}
              </RadioCard>
            ))}
          </Stack>
          <Heading size="mg" color="#a5bbd4">
            TYPE D’EAU CHAUDE SANITAIRE
          </Heading>
          <Stack {...sanitaireGroupProps()} direction="row">
            {optionsSanitaire.map((option) => (
              <RadioCard
                key={option.value}
                {...sanitaireRadioProps({ value: option.value })}
                icon={option.icon}
              >
                {option.label}
              </RadioCard>
            ))}
          </Stack>
          <Heading size="mg" color="#a5bbd4">
            CAPACITÉ DE STOCKAGE
          </Heading>
          <Stack {...stockageGroupProps()} direction="row">
            {optionsStockage.map((option) => (
              <RadioCard
                key={option.value}
                {...stockageRadioProps({ value: option.value })}
                icon={option.icon}
              >
                {option.label}
              </RadioCard>
            ))}
          </Stack>
          <Heading size="mg" color="#a5bbd4">
            UTILISATION DE L’EAU CHAUDE SANITAIRE
          </Heading>
          <Stack {...useGroupProps()} direction="row">
            {optionsUse.map((option) => (
              <RadioCard
                key={option.value}
                {...usesRadioProps({ value: option.value })}
                icon={option.icon}
              >
                {option.label}
              </RadioCard>
            ))}
          </Stack>
          <Box
            display={"flex"}
            color={"white"}
            w={"350px"}
            justifyContent={"center"}
            bgColor={"#15af97"}
            borderRadius={"25px"}
          >
            <Heading size={"lg"}> CHAUFFAGE</Heading>
          </Box>
          <Heading size="mg" color="#a5bbd4">
            SOURCE D’ÉNERGIE
          </Heading>
          <Stack {...sourceGroupProps()} direction="row">
            {optionsSource.map((option) => (
              <RadioCard
                key={option.value}
                {...sourceRadioProps({ value: option.value })}
                icon={option.icon}
              >
                {option.label}
              </RadioCard>
            ))}
          </Stack>
          <Heading size="mg" color="#a5bbd4">
            TYPE DE CHAUFFAGE
          </Heading>
          <Stack {...chauffageGroupProps()}>
            {/* Première ligne avec 5 RadioCard */}
            <Stack direction="row">
              {optionsChauffage.slice(0, 5).map((option) => (
                <RadioCard
                  key={option.value}
                  {...chauffageRadioProps({ value: option.value })}
                  icon={option.icon}
                >
                  {option.label}
                </RadioCard>
              ))}
            </Stack>
            <Stack direction="row">
              {optionsChauffage.slice(5, 10).map((option) => (
                <RadioCard
                  key={option.value}
                  {...chauffageRadioProps({ value: option.value })}
                  icon={option.icon}
                >
                  {option.label}
                </RadioCard>
              ))}
            </Stack>
          </Stack>
          <Heading size="mg" color="#a5bbd4">
            UTILISATION DU CHAUFFAGE
          </Heading>
          <Stack {...chauffagesGroupProps()} direction="row">
            {optionsChauffages.map((option) => (
              <RadioCard
                key={option.value}
                {...chauffagesRadioProps({ value: option.value })}
                icon={option.icon}
              >
                {option.label}
              </RadioCard>
            ))}
          </Stack>
          <Heading size="mg" color="#a5bbd4">
            PÉRIODE(S) D’UTILISATION (CHOIX MULTIPLE)
          </Heading>
          <Stack direction="row">
            {optionsPeriode.map((option) => (
              <RadioCard
                key={option.value}
                value={option.value}
                isChecked={selectedPeriodes.includes(option.value)}
                onChange={handlePeriodeChange}
                icon={option.icon}
              >
                {option.label}
              </RadioCard>
            ))}
          </Stack>
         
          <DisplayCost />
          <Button colorScheme="blue" type="submit">
            Valider
          </Button>
        </VStack>
      </Box>
    </form>
  );
};

export default ClientAudit;