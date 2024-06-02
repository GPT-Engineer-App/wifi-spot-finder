import React, { useState } from "react";
import { Container, VStack, Text, Button, Input, Box, useToast } from "@chakra-ui/react";
import { FaWifi } from "react-icons/fa";

const Index = () => {
  const [wifiPassword, setWifiPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();

  const handleShowPassword = () => {
    if (wifiPassword) {
      setShowPassword(!showPassword);
    } else {
      toast({
        title: "No WiFi password found.",
        description: "Please enter a WiFi password.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Box display="flex" alignItems="center">
          <FaWifi size="2em" />
          <Text fontSize="2xl" ml={2}>
            Nearby WiFi Password
          </Text>
        </Box>
        <Input placeholder="Enter WiFi Password" value={wifiPassword} onChange={(e) => setWifiPassword(e.target.value)} size="lg" />
        <Button colorScheme="teal" onClick={handleShowPassword}>
          {showPassword ? "Hide Password" : "Show Password"}
        </Button>
        {showPassword && (
          <Box p={4} borderWidth={1} borderRadius="md" width="100%" textAlign="center">
            <Text fontSize="lg">{wifiPassword}</Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
