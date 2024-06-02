import React, { useState } from "react";
import { Container, VStack, Input, Button, Box, Text } from "@chakra-ui/react";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      if (input.trim().toLowerCase() === "hi") {
        setMessages((prevMessages) => [...prevMessages, { text: input, sender: "user" }, { text: "Hi, how can I assist you today?", sender: "bot" }]);
      } else {
        setMessages((prevMessages) => [...prevMessages, { text: input, sender: "user" }]);
      }
      setInput("");
    }
  };

  return (
    <Container centerContent maxW={{ base: "container.sm", md: "container.md" }} height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Box width="100%" p={4} borderWidth={1} borderRadius="md" overflowY="auto" height="60vh" maxW={{ base: "100%", md: "80%" }}>
          {messages.map((msg, index) => (
            <Box key={index} alignSelf={msg.sender === "user" ? "flex-end" : "flex-start"} mb={2}>
              <Text bg={msg.sender === "user" ? "teal.100" : "gray.100"} p={2} borderRadius="md">
                {msg.text}
              </Text>
            </Box>
          ))}
        </Box>
        <Box display="flex" width="100%">
          <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message..." />
          <Button onClick={handleSend} colorScheme="teal" ml={2}>
            Send
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Chat;
