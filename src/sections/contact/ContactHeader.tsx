import { Box, Container, Text } from "@chakra-ui/react";

export const ContactHeader = () => {
  return (
    <>
      <Box
        background="linear-gradient(to right,  #fd35e2, #ff791a)"
        minH="50vh"
        py={{ base: "100px", lg: "150px" }}
      >
        <Container maxW="6xl">
          <Box>
            <Text
              color="white"
              textAlign="center"
              alignItems="center"
              fontSize="5xl"
              fontWeight="bolder"
            >
              Connect with us
            </Text>
            <Text color="white" textAlign="center" alignItems="center">
              Feel free to reach out to us using the options below, and our{" "}
              <br />
              dedicated team will respond to your inquiries promptly.
            </Text>
          </Box>
        </Container>
      </Box>
    </>
  );
};
