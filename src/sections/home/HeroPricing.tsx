import { HeroPricingCards } from "@/components/HeroPricingCards";
import { Tags } from "@/components/Tags";
import { Box, Center, Container, Grid, Text } from "@chakra-ui/react";

export const HeroPricing = () => {
  return (
    <>
      <Box background="white" py={{ base: "100px", lg: "150px" }}>
        <Container maxW="6xl">
          <Box>
            <Tags title="Flexible pricing" />
            <Text textAlign="center">Flexible pricing, exceptional value</Text>
            <Text textAlign="center">
              Whether you're an individual, a small team, or a growing
              enterprise, we have a plan that aligns perfectly with your goals.
            </Text>
          </Box>
          <Center>Monthly</Center>
          <Box></Box>
          <Box>
            <Grid
              templateColumns={{ base: "repeat(3, 1fr)", lg: "repeat(3, 1fr)" }}
              gap={10}
            >
              <Box>
                <HeroPricingCards
                  title="Personal"
                  text="For individuals and small teams trying out for an unlimited period."
                  cost="29"
                />
              </Box>
              <Box>
                <HeroPricingCards
                  title="Extended"
                  text="For individual account executives who want increased productivity."
                  cost="49"
                />
              </Box>
              <Box>
                <HeroPricingCards
                  title="Premium"
                  text="For medium and large sales organizations with advanced needs."
                  cost="99"
                />
              </Box>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};
