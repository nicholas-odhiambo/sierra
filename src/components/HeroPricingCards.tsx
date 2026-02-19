import { Box, Text } from "@chakra-ui/react";

type HeroPricingCards = {
  title: string;
  text: string;
  cost: string;
};

export const HeroPricingCards = ({ title, text, cost }: HeroPricingCards) => {
  return (
    <div>
      <Box background="bg.muted" p={10} rounded="2xl">
        <Text fontWeight="bolder" fontSize="lg">
          {title}
        </Text>
        <Text color="gray.500">{text}</Text>
        <Text fontWeight="bolder">
          <Text as="sup">$</Text>
          {cost}
          <Text as="span" color="gray.500">
            /month
          </Text>
        </Text>
      </Box>
    </div>
  );
};
