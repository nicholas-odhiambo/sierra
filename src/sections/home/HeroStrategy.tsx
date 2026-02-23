import { Box, Button, Container, Grid, GridItem, Text } from "@chakra-ui/react";

export const HeroStrategy = () => {
  return (
    <>
      <Box background="white" py={{ base: "80px", lg: "110px" }}>
        <Container
          maxW="6xl"
          background="linear-gradient(to right,  #fd35e2, #ff791a)"
          rounded="2xl"
        >
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
            <GridItem p={10}>
              <Text color="white" fontWeight="bolder" fontSize="4xl">
                {" "}
                Data-driven insights, <br /> smarter decisions
              </Text>
              <Text color="white" py={10}>
                Access detailed analytics and reports <br /> to monitor chatbot
                performance.
              </Text>
              <Button>Discover more</Button>
            </GridItem>
            <GridItem></GridItem>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
