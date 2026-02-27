import { PricingValuesCard } from "@/components/PricingValuesCard";
import { Tags } from "@/components/Tags";
import { Box, Container, SimpleGrid, Text } from "@chakra-ui/react";

export const PricingValues = () => {
  return (
    <>
      <Box background="gray.100" py={{ base: "100px", lg: "150px" }} mt={20}>
        <Container maxW="6xl">
          <Tags title="Our values" />
          <Text
            textAlign="center"
            alignItems="center"
            fontSize="4xl"
            fontWeight="bolder"
          >
            Reasons to partner with us
          </Text>
          <Text textAlign="center" alignItems="center" color="gray.500">
            We go above and beyond to delivereyyy eeeyyyexceptional value to our{" "}
            <br /> customers. Here is why businesses like yours should choose
            us.
          </Text>
          <Box mt={5}>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
              <PricingValuesCard
                icon="HA"
                title="Innovation Solutions"
                text="Experience the latest advancement in technology with our innovative solutions."
              />
              <PricingValuesCard
                icon="HA"
                title="Reliable performance"
                text="Count on our reliable services and robust infrastructure to keep operations running."
              />{" "}
              <PricingValuesCard
                icon="HA"
                title="Customer support"
                text="Enjoy dedicated customer support who are commited to resolving your queries."
              />{" "}
              <PricingValuesCard
                icon="HA"
                title="Data Security "
                text="Rest Easy Knowing your data is protected with state-of-the-art security measures."
              />{" "}
              <PricingValuesCard
                icon="HA"
                title="Regular updates"
                text="Benefit from continous updates. Get access to latest features."
              />{" "}
              <PricingValuesCard
                icon="HA"
                title="Captive pricing"
                text="Our transparent pricing means you get the best value for your investment."
              />
            </SimpleGrid>
          </Box>
        </Container>
      </Box>
    </>
  );
};
