import { Tags } from "@/components/Tags";
import { Box, Container, Grid, GridItem, Text } from "@chakra-ui/react";

export const HeroLive = () => {
  return (
    <>
      <Box background="bg.muted" py="200px">
        <Container maxW="6xl">
          <Box>
            <Grid
              templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
              gap={6}
            >
              <GridItem bg="red.300">
                <Tags title="Live chat" />
                <Text> Real-time chat, exceptional client experiences</Text>
                <Text>
                  Offer live chat support to your customers. Our chatbot
                  seamlessly transitions to human agents when needed.
                </Text>
              </GridItem>
              <GridItem>
                <Box bg="linear-gradient(to right,  #fd35e2, #ff791a)"></Box>
              </GridItem>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};
