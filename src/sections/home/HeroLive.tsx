import { Box, Container, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import liveChat from "../../images/live-chat.jpg";

export const HeroLive = () => {
  return (
    <>
      {/* <Box background="gray.600" py="200px">
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
              <GridItem
                background="linear-gradient(to right,  #fd35e2, #ff791a)"
                rounded="lg"
              >
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  p={2}
                >
                  <Image
                    src={sierraChatbot}
                    alt="sierrachatbot image"
                    rounded="lg"
                  />
                </Box>
              </GridItem>
            </Grid>
          </Box>
        </Container>
      </Box> */}
      <Box background="bg.muted" py={{ base: "100px", lg: "150px" }}>
        <Container maxW="6xl">
          <Grid
            templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
            gap={{ base: 10, lg: 16 }}
            alignItems="center"
          >
            <GridItem>
              <Box>
                <Text fontSize="6xl" fontWeight="bold" mt={2}>
                  Real-time chat, exceptional client experiences
                </Text>

                <Text mt={4} color="gray.400" lineHeight="tall">
                  Offer live chat support to your customers. Our chatbot
                  seamlessly transitions to human agents when needed.
                </Text>
              </Box>
            </GridItem>

            <GridItem>
              <Box
                background="linear-gradient(to right,  #fd35e2, #ff791a)"
                rounded="2xl"
                p={6}
                display="flex"
                justifyContent="center"
                alignItems="center"
                minH={{ base: "400px", lg: "500px" }}
              >
                <Image
                  src={liveChat}
                  alt="sierrachatbot image"
                  maxH="450px"
                  rounded="lg"
                />
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
