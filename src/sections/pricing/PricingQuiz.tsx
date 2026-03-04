import { FaqItem } from "@/components/FaqItem";
import { Tags } from "@/components/Tags";
import { FaqData } from "@/data/FaqData";
import { Box, Container, Grid, GridItem, Text } from "@chakra-ui/react";

export const PricingQuiz = () => {
  const leftColumn = FaqData.slice(0, 3);
  const rightColumn = FaqData.slice(3, 6);

  return (
    <>
      <Box background="white" py={{ base: "100px", md: "150px" }} mt={3}>
        <Container maxW="6xl">
          <Box>
            <Tags title="We've got answers" />
            <Text
              textAlign="center"
              alignItems="center"
              fontSize="4xl"
              fontWeight="bold"
            >
              Any doubts? We're here to help
            </Text>
            <Text textAlign="center" alignItems="center" color="gray.400">
              Browse through our frequently asked questions to find answers{" "}
              <br />
              regarding our products and billing processes.
            </Text>
          </Box>
          <Box mt={10}>
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap={8}
            >
              <GridItem>
                <FaqItem items={leftColumn} />
              </GridItem>
              <GridItem>
                <FaqItem items={rightColumn} />
              </GridItem>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};
