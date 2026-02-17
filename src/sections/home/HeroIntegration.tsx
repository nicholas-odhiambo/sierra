import { IntegrationsCards } from "@/components/IntegrationsCards";
import { Box, Button, Container, Grid, GridItem, Text } from "@chakra-ui/react";

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
            <GridItem>
              <Text fontSize="4xl" fontWeight="black">
                Easy integrations, effortless operations
              </Text>
              <Text py={5}>
                Unlock the potential of your business with our website creation
                tool. Elevate your online presence now.
              </Text>
              <Button>Explore Integrations</Button>
            </GridItem>
            <GridItem>
              <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={6}>
                <IntegrationsCards
                  icon=""
                  title="Browser services"
                  text="Automate email responses, ensuring your customers receive relevant information"
                  button="Learn more"
                />
                <IntegrationsCards
                  icon=""
                  title="Intercom helpdesk"
                  text="Engage customers directly on their preferred messaging platform."
                  button="Learn more"
                />
                <IntegrationsCards
                  icon=""
                  title="Asana software"
                  text="Coordinate tasks and projects seamlessly, enhancing team productivity."
                  button="Learn more"
                />
                <IntegrationsCards
                  icon=""
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
