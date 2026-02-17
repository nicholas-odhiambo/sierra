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
                <Box background="white" rounded="2xl"></Box>
                <Box background="white" rounded="2xl">
                  1
                </Box>
                <Box background="white" rounded="2xl">
                  1
                </Box>
                <Box background="white" rounded="2xl">
                  1
                </Box>
              </Grid>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
