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
          <Box>
            <Grid
              templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
              gap={6}
              alignItems="stretch"
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
