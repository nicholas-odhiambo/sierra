import { HeroIntegrationsCards } from "@/components/HeroIntegrationsCards";
import { Box, Button, Container, Grid, GridItem, Text } from "@chakra-ui/react";
import chrome from "../../images/chrome.png";
import asana from "../../images/asana.png";
import intercom from "../../images/intercom.png";
import google from "../../images/google.png";

export const HeroIntegration = () => {
  return (
    <>
      <Box background="bg.muted" py={{ base: "100px", lg: "150px" }}>
        <Container maxW="6xl">
          <Grid
            templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
            gap={6}
            alignItems="start"
          >
            <GridItem justifyContent="center" alignItems="center">
              <Text fontSize="4xl" fontWeight="black">
                Easy integrations, effortless operations
              </Text>
              <Text py={5}>
                Unlock the potential of your business <br /> with our website
                creation tool. Elevate <br /> your online presence now.
              </Text>
              <Button>Explore Integrations</Button>
            </GridItem>
            <GridItem>
              <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={6}>
                <HeroIntegrationsCards
                  icon={chrome}
                  title="Browser services"
                  text="Automate email responses, ensuring your customers receive relevant information"
                  button="Learn more"
                />
                <HeroIntegrationsCards
                  icon={intercom}
                  title="Intercom helpdesk"
                  text="Engage customers directly on their preferred messaging platform."
                  button="Learn more"
                />
                <HeroIntegrationsCards
                  icon={asana}
                  title="Asana software"
                  text="Coordinate tasks and projects seamlessly, enhancing team productivity."
                  button="Learn more"
                />
                <HeroIntegrationsCards
                  icon={google}
                  title="Google Drive app"
                  text="Access and share documents effortlessly for better customer support."
                  button="Learn more"
                />
              </Grid>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
