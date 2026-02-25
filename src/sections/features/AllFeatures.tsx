import { Tags } from "@/components/Tags";
import { Box, Container, Grid, GridItem, Text } from "@chakra-ui/react";
import { HeroCardFeatures } from "../home";

export const AllFeatures = () => {
  return (
    <>
      <Box background="gray.100" py={{ base: "100px", lg: "150px" }} mt="40px">
        <Container maxW="6xl">
          <Box>
            <Tags title="All features" />
            <Text
              textAlign="center"
              alignItems="center"
              fontSize="4xl"
              fontWeight="bolder"
            >
              Discover everything <br /> you can do with Sierra
            </Text>
            <Text textAlign="center" alignItems="center" color="gray.400">
              {" "}
              Explore our suite of features designed to streamline your <br />
              operations, drive sales, and enhance customer satisfaction.
            </Text>
          </Box>
          <Box mt="40px">
            <Grid
              templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }}
              gap={{ base: 10, md: 15 }}
            >
              <GridItem>
                <HeroCardFeatures
                  image=""
                  title="Solid planning"
                  description="Get free access to our global partner network and marketplace to recieve premium assistance. "
                />
              </GridItem>
              <GridItem>
                <HeroCardFeatures
                  image=""
                  title="Solid planning"
                  description="Get free access to our global partner network and marketplace to recieve premium assistance. "
                />
              </GridItem>
              <GridItem>
                <HeroCardFeatures
                  image=""
                  title="Solid planning"
                  description="Get free access to our global partner network and marketplace to recieve premium assistance. "
                />
              </GridItem>
              <GridItem>
                <HeroCardFeatures
                  image=""
                  title="Solid planning"
                  description="Get free access to our global partner network and marketplace to recieve premium assistance. "
                />
              </GridItem>
              <GridItem>
                <HeroCardFeatures
                  image=""
                  title="Solid planning"
                  description="Get free access to our global partner network and marketplace to recieve premium assistance. "
                />
              </GridItem>
              <GridItem>
                <HeroCardFeatures
                  image=""
                  title="Solid planning"
                  description="Get free access to our global partner network and marketplace to recieve premium assistance. "
                />
              </GridItem>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};
