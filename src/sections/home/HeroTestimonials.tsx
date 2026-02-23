import { HeroTestimonialsCards } from "@/components/HeroTestimonialsCards";
import { Tags } from "@/components/Tags";
import { Box, Container, Grid, Text } from "@chakra-ui/react";

export const HeroTestimonials = () => {
  return (
    <>
      <Box background="white" py={{ base: "100px", lg: "150px" }}>
        <Container maxW="6xl" py={10}>
          <Box>
            <Tags title="Customer Testimonials" />
            <Text
              textAlign="center"
              alignItems="center"
              fontWeight="bolder"
              fontSize="4xl"
            >
              Hear from businesses like yours who <br /> transformed their
              customer service
            </Text>
            <Text
              textAlign="center"
              alignItems="center"
              color="gray.500"
              lineHeight={2}
            >
              The best way to showcase our commitment is through the <br />{" "}
              experiences and stories of those who have partnered with us.
            </Text>
          </Box>
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
            gap={6}
            alignItems="stretch"
            pt={10}
          >
            <HeroTestimonialsCards
              company="Trustpilot "
              testimonial="Every step of the way they provided helpful advice, recommended strategies to ensure our website was optimally set up, and made sure every element was clear."
              name="Saafa Sampson"
              title="Account Executive"
            />
            <HeroTestimonialsCards
              company="asana "
              testimonial="I just had to take a moment to express my gratitude for the outstatnding service they provided. Their complete assistance and errorts were truly remarkable."
              name="Fredrick Hill"
              title="Content Designer"
            />
            <HeroTestimonialsCards
              company="Google "
              testimonial="I cant't help bust express how impressed I am with their incredible professionalism and expertise. They know thier studd and our taks was completed effortlessly."
              name="Brendan Buck"
              title="Data Engineer"
            />
          </Grid>
        </Container>
      </Box>
    </>
  );
};
