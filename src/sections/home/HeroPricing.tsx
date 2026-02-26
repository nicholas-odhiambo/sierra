import { PricingCards } from "@/components/PricingCards";
import { Tags } from "@/components/Tags";
import { pricingPackages } from "@/data/PricingData";
import { Box, Center, Container, SimpleGrid, Text } from "@chakra-ui/react";

export const HeroPricing = () => {
  return (
    <>
      <Box background="white" py={{ base: "100px", lg: "150px" }}>
        <Container maxW="6xl">
          <Box>
            <Tags title="Flexible pricing" />
            <Text textAlign="center" textStyle="4xl" fontWeight="bold">
              Flexible pricing, exceptional value
            </Text>
            <Text textAlign="center" py={5} color="gray.500" fontSize="lg">
              Whether you're an individual, a small team, or a growing
              enterprise, <br /> we have a plan that aligns perfectly with your
              goals.
            </Text>
          </Box>
          <Center>Monthly</Center>
          <Box></Box>
          <Box mt={10}>
            <Container maxW="6xl">
              <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
                {pricingPackages.map((pkg) => (
                  <PricingCards key={pkg.name} data={pkg} />
                ))}
              </SimpleGrid>
            </Container>
          </Box>
        </Container>
      </Box>
    </>
  );
};
