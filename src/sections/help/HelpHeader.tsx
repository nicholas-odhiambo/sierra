import { Box, Container, Text } from "@chakra-ui/react";

export const HelpHeader = () => {
  return (
    <>
      <Box
        background="linear-gradient(to right,  #fd35e2, #ff791a)"
        minH="50vh"
        py={{ base: "100px", lg: "150px" }}
      >
        <Container maxW="6xl">
          <Box>
            <Text color="white" fontSize="5xl" fontWeight="bolder">
              Got questions? This way.
            </Text>
            <Text color="white">
              FAQs, quick fixes, and official info on every feature. <br />
              Can't find your question here, try our support forums.
            </Text>
          </Box>
        </Container>
      </Box>
    </>
  );
};
