import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Text,
  Image,
  Flex,
} from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box bgColor="#b3489ddd">
      <Container maxW="6xl" fluid pt="20">
        <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6}>
          <GridItem h="400px">
            <Text
              as="h1"
              fontWeight="medium"
              fontSize={{ base: "2xl", md: "4xl", lg: "6xl" }}
              color="#ffffff"
              lineHeight={1.1}
            >
              {" "}
              Automate workflow without coding{" "}
            </Text>
            <Text as="p" fontWeight="lighter" fontSize="2xl" color="#ffffff">
              Experience the future of customer interactions today with our
              intuitive, AI-powered solution.
            </Text>
            <Button px="15" marginTop="10">
              View Pricing plans{" "}
            </Button>
            <Box></Box>
          </GridItem>
          <GridItem h="400px">
            <Image minH="45 vh" src="/images/sierra-chatbot-4.png" />
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
