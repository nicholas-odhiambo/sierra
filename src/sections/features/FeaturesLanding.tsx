import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import SierraChatbot from "../../images/sierra-chatbot-4.png";

export const FeaturesLanding = () => {
  return (
    <>
      <Box>
        <Box
          background="linear-gradient(to right,  #fd35e2, #ff791a)"
          minH="70vh"
          pt={{ base: "60px", md: "80px" }}
        >
          <Container maxW="6xl" pt="40px">
            <Box pt="100px">
              <Text
                textAlign="center"
                alignItems="center"
                color="white"
                fontWeight="bolder"
                fontSize="5xl"
              >
                Our services and solutions
              </Text>
              <Text
                textAlign="center"
                alignItems="center"
                color="white"
                py={3}
                lineHeight="taller"
              >
                Discover how our tech solutions can transform your business.{" "}
                <br /> Explore our features and take your business to new
                heights.
              </Text>
            </Box>
            <Image />
          </Container>
        </Box>
        <Box>
          <Container background="gray.100" maxW="6xl" rounded={5} py={10}>
            <Grid
              templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
              gap={{ base: "10", lg: "12" }}
            >
              <GridItem>
                <Button
                  rounded={20}
                  background="#fff"
                  color="black"
                  outline="black"
                >
                  Launch with ease
                </Button>
                <Text fontWeight="bolder" fontSize="4xl">
                  Automate sales <br /> and support <br /> with chatbots
                </Text>
                <Text py={5} color="gray.500">
                  Unlock benefits for your business with our services. Reach
                  more customers, save time and money.
                </Text>
              </GridItem>
              <GridItem>
                <Image src={SierraChatbot} h="max-content" w="max-content" />
              </GridItem>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};
