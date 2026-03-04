import { PricingValuesCard } from "@/components/PricingValuesCard";
import { Box, Container, Grid } from "@chakra-ui/react";

export const ContactBoxes = () => {
  return (
    <div>
      <Box background="white">
        <Container>
          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}>
            <PricingValuesCard
              icon="HA"
              title={"Knowledge Hub"}
              text={
                "A comprehensive repository of knowledge designed to address your queries"
              }
            />
            <PricingValuesCard
              icon="HA"
              title={"Chat to sales"}
              text={
                "Get detailed information about our products, pricing, and any current promotions."
              }
            />
            <PricingValuesCard
              icon="HA"
              title={"Call for assistance"}
              text={
                "Our support team is available to answer your questions, and provide techniacl help."
              }
            />
          </Grid>
        </Container>
      </Box>
    </div>
  );
};
