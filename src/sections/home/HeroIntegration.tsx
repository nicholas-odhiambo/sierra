import { Box, Container, Grid, GridItem } from "@chakra-ui/react";

export const HeroIntegration = () => {
  return (
    <>
      <Box background="bg.muted" py={{ base: "100px", lg: "150px" }}>
        <Container maxW="6xl">
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={6}>
            <GridItem background="yellow">1</GridItem>
            <GridItem background="green">2</GridItem>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
