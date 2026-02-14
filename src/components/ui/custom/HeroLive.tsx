import { Box, Container, Grid, GridItem } from "@chakra-ui/react";

const HeroLive = () => {
  return (
    <>
      <Box background="bg.muted" minH="100vh">
        <Container>
          <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
            <GridItem bg="red.300">1</GridItem>
            <GridItem bg="blue"> 2</GridItem>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default HeroLive;
