import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import Chatbot1 from "../../images/sierra-chatbot-1.jpg";
import Chatbot2 from "../../images/sierra-chatbot-2.png";

export const ChatFeature = () => {
  return (
    <>
      <Box background="white" py={{ base: "100px", lg: "150px" }}>
        {/* live chat    */}
        <Container maxW="6xl">
          <Grid
            templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
            gap={{ base: "10", lg: "16" }}
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
                <Image src={Chatbot1} />
              </Box>
            </GridItem>
            <GridItem>
              <Box>
                <Button>Live Chat</Button>
                <Text> Real-time chat, exceptional experiences</Text>
                <Text>
                  Offer live chat support to your customers. Our chatbot
                  seamlessly transitions to human agents when needed.
                </Text>
                <Box w="100%" background="gray.100">
                  <Text> Real-Time Tracking</Text>
                  <Text> Monitor activities and conversations instantly</Text>
                </Box>
                <Box w="100%" background="gray.100">
                  <Text>Performance Analytics</Text>
                  <Text> Identify top performers and optimize.</Text>
                </Box>
                <Box w="100%" background="gray.100">
                  <Text>Payout automation </Text>
                  <Text> Seamless and timely transactions </Text>
                </Box>
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Box>

      <Box>
        {/*  chatbpot rules */}
        <Container maxW="6xl">
          <Grid
            templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
            gap={{ base: "10", lg: "16" }}
          >
            <GridItem>
              <Box>
                <Button>Your chat, your rules</Button>
                <Text> Sierra is more than a chatbot software</Text>
                <Text>
                  Tailor the responses, and interactions to fit your business
                  identity
                </Text>
                <Box w="100%" background="gray.100" pt={5}>
                  <Text> Powerful task management</Text>
                  <Text> Stay organinized, collaborate seamlessly</Text>
                </Box>
                <Box w="100%" background="gray.100">
                  <Text> Intuitive project overview</Text>
                  <Text> Streamline communication, track progress</Text>
                </Box>
                <Box w="100%" background="gray.100">
                  <Text> Analyze and track traffic </Text>
                  <Text> unlock insights and optimize strategies.</Text>
                </Box>
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
                <Image src={Chatbot2} />
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
