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
      <Box>
        <Text>{company}</Text>
        <Text>{testimonial}</Text>
        <Text>{name}</Text>
        <Text>{title}</Text>
      </Box>
    </div>
  );
};
