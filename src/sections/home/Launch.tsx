import { Box, Button, Container, Grid, GridItem, Text } from "@chakra-ui/react";
import LaunchCard from "./LaunchCard";

export const Launch = () => {
  return (
    <Box background="bg.muted" minH="100vh">
      <Container maxW="6xl" pt="40px">
        <Box
          display="flex"
          justifyContent="center"
          textAlign="center"
          alignItems="center"
          flexDirection="column"
          px={4}
          pt="10"
        >
          <Button>Launch with ease</Button>
          <Text
            as="h1"
            fontWeight="bold"
            fontFamily="heading"
            fontSize="5xl"
            textWrap="wrap"
          >
            Automate sales and support with chatbots{" "}
          </Text>
          <Text as="p" color="muted">
            {" "}
            Unlock unparalleled benefits for your business with our services.
            Reach more customers, save time and money.
          </Text>
        </Box>
        <Box pt="10">
          <Grid templateColumns="repeat(auto-fit, minmax(250px , 1fr))" gap={6}>
            <GridItem>
              <LaunchCard
                image=""
                title="Omnichannel"
                description="Engage customers seamlessly across all platforms, ensuring a unified experience"
              />
            </GridItem>
            <GridItem>
              <LaunchCard
                image=""
                title="AI-Powered Services"
                description="Harness the poewer of artificial intelliogence to provide instance and accurate responses."
              />
            </GridItem>
            <GridItem>
              <LaunchCard
                image=""
                title="Simple Plug and Play"
                description="Intergrate our chatbot effortlessly into your existing systems. No hastle just instant automation."
              />
            </GridItem>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
