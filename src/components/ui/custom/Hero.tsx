import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Text,
  Image,
} from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box bgColor="#b3489ddd">
      <Container maxW="6xl" fluid pt="20">
        <Grid templateColumns="repeat(4, 1fr)" gap="40px">
          <GridItem colSpan={2}>
            <Text fontWeight="bold" fontSize="3xl" color="#ffffff">
              {" "}
              Automate live chat without coding{" "}
            </Text>
            <Text fontWeight="lighter" fontSize="2xl" color="#ffffff">
              Experience the future of customer interactions today with our
              intuitive, AI-powered solution.
            </Text>
            <Button>View Pricing plans </Button>
          </GridItem>
          <GridItem colSpan={1}>
            <Image height="" src="/images/sierra-chatbot-4.png" />
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
