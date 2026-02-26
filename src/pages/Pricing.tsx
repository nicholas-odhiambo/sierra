import { PricingCards } from "@/components/PricingCards";
import { pricingPackages } from "@/data/PricingData";
import { Box, Container, SimpleGrid, Text } from "@chakra-ui/react";

export const Pricing = () => {
  return (
    <>
      <Box
        background="linear-gradient(to right,  #fd35e2, #ff791a)"
        minH="60vh"
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
              Predictable, transparent pricing
            </Text>
            <Text color="white" textAlign="center" alignItems="center">
              Whether you're an individual, a small team, or a growing <br />{" "}
              enterprise, we have a plan that aligns perfectly with your goals.
            </Text>
          </Box>
        </Container>
      </Box>
      <Box mt={10}>
        <Container maxW="6xl">
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
            {pricingPackages.map((pkg) => (
              <PricingCards key={pkg.name} data={pkg} />
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
};
