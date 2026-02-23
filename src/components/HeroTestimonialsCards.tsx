import { Box, Text } from "@chakra-ui/react";

type HeroTestimonialsCards = {
  company: string;
  testimonial: string;
  name: string;
  title: string;
};

export const HeroTestimonialsCards = ({
  company,
  testimonial,
  name,
  title,
}: HeroTestimonialsCards) => {
  return (
    <div>
      <Box background="gray.100" rounded={6} h="250px">
        <Text textAlign="center" alignItems="center" fontWeight="bolder" pt={3}>
          {company}
        </Text>
        <Text textAlign="center" alignItems="center" py={5}>
          {" "}
          {testimonial}
        </Text>
        <Text textAlign="center" alignItems="center" fontWeight="bolder">
          {name}
        </Text>
        <Text textAlign="center" alignItems="center">
          {title}
        </Text>
      </Box>
    </div>
  );
};
