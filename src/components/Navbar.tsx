import { Box, Button, Container, Flex, Image, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import LOGO from "../images/sierra-logo-white.svg";
export const Navbar = () => {
  return (
    <>
      <Box
        background="white"
        position="fixed"
        w="100%"
        px={6}
        py={4}
        top={0}
        zIndex="sticky"
      >
        <Container>
          <Flex align="center">
            <Box>
              <Image src={LOGO} h="40px" />
            </Box>

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
