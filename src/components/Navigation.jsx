import { Link } from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <Box display="flex" justifyContent="space-around" p={4} bg="gray.100" width="100%" flexWrap="wrap">
      <Button as={Link} to="/" colorScheme="teal" mb={{ base: 2, md: 0 }}>
        WiFi Networks
      </Button>
      <Button as={Link} to="/chat" colorScheme="teal" mb={{ base: 2, md: 0 }}>
        Chat
      </Button>
    </Box>
  );
};

export default Navigation;
