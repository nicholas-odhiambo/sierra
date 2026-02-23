import { Box, Button, Container, Flex, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <Box background="white" position="fixed" w="100%" px={6} py={4}>
        <Container>
          <Flex align="center">
            <Box>LOGO</Box>

            <Spacer />

            {/* Desktop Navbar */}
            <Box display={{ base: "none", md: "flex" }} gap={7}>
              <Link to="/">Home</Link>
              <Link to="/features">Features</Link>
              <Link to="/integrations">Integrations</Link>
              <Link to="/pricing">Pricing</Link>
              <Link to="/help">Help</Link>
              <Link to="contact/">Contact</Link>
            </Box>
            <Spacer />

            <Box display={{ base: "none", md: "block" }}>
              <Button>Free Trial</Button>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};
