import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import chatRules from "../../images/chat-rules.png";

export const HeroChatRules = () => {
  return (
    <>
      <Box background="white" py={{ base: "100px", lg: "150px" }}>
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
                <Text fontSize="5xl" fontWeight="bold" mt={2}>
                  Sierra is more than a chatbot software for modern websites
                </Text>

                <Text mt={4} color="gray.400" lineHeight="tall" py={5}>
                  Customize it to align with your brand's personality. Tailor
                  the responses, and interactions to fit your business identity.
                </Text>
                <Button>Discover more </Button>
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
