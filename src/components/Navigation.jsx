import { Link } from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <Box display="flex" justifyContent="space-around" p={4} bg="gray.100" width="100%">
      <Button as={Link} to="/" colorScheme="teal">
        WiFi Networks
      </Button>
      <Button as={Link} to="/chat" colorScheme="teal">
        Chat
      </Button>
    </Box>
  );
};

export default Navigation;
