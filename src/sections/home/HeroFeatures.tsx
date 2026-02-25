import { Box, Container, Grid, GridItem, Text } from "@chakra-ui/react";
import { HeroCardFeatures } from "../../components/HeroCardFeatures";
import { Tags } from "@/components/Tags";

export const HeroFeatures = () => {
  return (
    <Box background="bg.muted" py="200px">
      <Container maxW="6xl">
        <Box>
          <Tags title="Launch with ease" />
          <Text textAlign="center" fontSize="4xl" fontWeight="bold" py={5}>
            Automate sales and support <br /> with chatbots{" "}
          </Text>
          <Text color="gray.400" textAlign="center" py={5}>
            {" "}
            Unlock unparalleled benefits for your business with our <br />{" "}
            services. Reach more customers, save time and money.
          </Text>
        </Box>

        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
          gap={6}
          alignItems="stretch"
        >
          <GridItem>
            <HeroCardFeatures
              image=""
              title="Omnichannel"
              description="Engage customers seamlessly across all platforms, ensuring a unified experience"
            />
          </GridItem>
          <GridItem>
            <HeroCardFeatures
              image=""
              title="AI-Powered Services"
              description="Harness the poewer of artificial intelliogence to provide instance and accurate responses."
            />
          </GridItem>
          <GridItem>
            <HeroCardFeatures
              image=""
              title="Simple Plug and Play"
              description="Intergrate our chatbot effortlessly into your existing systems. No hastle just instant automation."
            />
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};
