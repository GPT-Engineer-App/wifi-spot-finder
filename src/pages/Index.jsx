import React, { useState } from "react";
import { Container, VStack, Text, Button, Input, Box, useToast, List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaWifi } from "react-icons/fa";

const Index = () => {
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
