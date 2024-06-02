import React, { useState } from "react";
import { Container, VStack, Text, Button, Input, Box, useToast, List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaWifi } from "react-icons/fa";

const Index = () => {
  const [userWifi, setUserWifi] = useState("");
  const [wifiNetworks, setWifiNetworks] = useState([
    { ssid: "Network1", password: "password1" },
    { ssid: "Network2", password: "password2" },
    { ssid: "Network3", password: "password3" },
  ]);

  return (
    <Container centerContent maxW={{ base: "container.sm", md: "container.md" }} height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Box display="flex" alignItems="center">
          <FaWifi size="2em" />
          <Text fontSize="2xl" ml={2}>
            Nearby WiFi Networks
          </Text>
        </Box>
        <Box width="100%" maxW={{ base: "100%", md: "80%" }}>
          <Input value={userWifi} onChange={(e) => setUserWifi(e.target.value)} placeholder="Enter your phone's WiFi name..." mb={4} />
          {userWifi && (
            <Box p={4} borderWidth={1} borderRadius="md" mb={4}>
              <Text fontSize="lg" fontWeight="bold">
                Your Phone's WiFi: {userWifi}
              </Text>
            </Box>
          )}
        </Box>
        <List spacing={3} width="100%" maxW={{ base: "100%", md: "80%" }}>
          {wifiNetworks.map((network, index) => (
            <ListItem key={index} p={4} borderWidth={1} borderRadius="md">
              <Text fontSize="lg" fontWeight="bold">
                {network.ssid}
              </Text>
              <Text>Password: {network.password}</Text>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;
