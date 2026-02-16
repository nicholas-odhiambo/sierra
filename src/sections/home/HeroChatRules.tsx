import { Box, Container, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import chatRules from "../../images/chat-rules.png";

export const HeroChatRules = () => {
  return (
    <>
      <Box background="bg.muted" py={{ base: "100px", lg: "150px" }}>
        <Container maxW="6xl">
          <Grid
            templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
            gap={{ base: 10, lg: 16 }}
            alignItems="center"
          >
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
                  src={chatRules}
                  alt="chatrules image"
                  maxH="450px"
                  rounded="lg"
                />
              </Box>
            </GridItem>
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
          </Grid>
        </Container>
      </Box>
    </>
  );
};
