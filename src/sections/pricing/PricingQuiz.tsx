import { Tags } from "@/components/Tags";
import { Box, Container, Text } from "@chakra-ui/react";

export const PricingQuiz = () => {
  return (
    <>
      <Box background="white" py={{ base: "100px", md: "150px" }} mt={3}>
        <Container maxW="6xl">
          <Box>
            <Tags title="We've got answers" />
            <Text
              textAlign="center"
              alignItems="center"
              fontSize="4xl"
              fontWeight="bold"
            >
              Any doubts? We're here to help
            </Text>
            <Text textAlign="center" alignItems="center" color="gray.400">
              Browse through our frequently asked questions to find answers{" "}
              <br />
              regarding our products and billing processes.
            </Text>
          </Box>
          <Box></Box>
        </Container>
      </Box>
    </>
  );
};
