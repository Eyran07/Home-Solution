import React, { useContext, useState } from "react";
import { ArcElement } from "chart.js";
import Chart from "chart.js/auto";
import { Pie, Doughnut } from "react-chartjs-2"; // Import Doughnut for a different design
import { Box, Button, Heading } from "@chakra-ui/react";
import { HomeContext } from "../../context/HomeContext";

const DisplayCost = () => {
  const [formData] = useContext(HomeContext);
  const [chartData, setChartData] = useState(null);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const generateChartData = () => {
    if (formData) {
      // Your calculatedData logic here

      // New chart data format
      const newData = {
        labels: ['CHAUFFAGE', 'EAU CHAUDE SANITAIRE', 'APPAREILS ÉLECTRIQUES', 'ÉCLAIRAGE'],
        datasets: [{
          label: 'Répartition de votre consommation énergétique',
          data: [formData.numberOfOccupants * 10, formData.surfaceAuSol * 5, formData.numberOfRooms * 3, formData.surfaceHabitable * 2], // Replace with real calculations
          backgroundColor: ['#a5bbd4', '#15af97', '#0b816e', '#0e8a9f'],
          hoverOffset: 4
        }]
      };

      setChartData(newData);
      setIsButtonVisible(false);
    }
  };

  return (
    <>
      {isButtonVisible && (
        <Button colorScheme="teal" variant="solid" onClick={generateChartData}>
          Calculer mes consomations energetiques
        </Button>
      )}
      {chartData && (
        <>
          {/* <Box
            display={"flex"}
            color={"white"}
            w={"750px"}
            justifyContent={"center"}
            bgColor={"#15af97"}
            borderRadius={"25px"}
          >
            <Heading size={"lg"}> VOS CONSOMMATIONS POSTE PAR POSTE </Heading>
          </Box> */}
          <Box
            display={"flex"}
            color={"white"}
            w={"950px"}
            justifyContent={"center"}
            bgColor={"#15af97"}
            borderRadius={"25px"}
          >
            <Heading size={"lg"}> RÉPARTITION DE VOTRE CONSOMMATION ÉNERGÉTIQUE </Heading>
          </Box>
          <Box
            width="500px"
            height="500px"
            boxShadow="base"
            p="4"
            rounded="md"
            bg="white"
          >
            {/* Using a Doughnut chart for a different design */}
            <Doughnut data={chartData} options={{ maintainAspectRatio: false }} />
          </Box>
          <Box
            display={"flex"}
            color={"white"}
            w={"650px"}
            justifyContent={"center"}
            bgColor={"#15af97"}
          >
            <Heading size={"lg"}>VOTRE CONSOMMATION ANNUELLE</Heading>
          </Box>
          <Heading>2000$</Heading> {/* Replace with calculated annual consumption if needed */}
        </>
      )}
    </>
  );
};

export default DisplayCost;
