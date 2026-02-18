import { Box, Text } from "@chakra-ui/react";

type HeroPricingCards = {
  title: string;
  text: string;
  cost: string;
};

export const HeroPricingCards = ({ title, text, cost }: HeroPricingCards) => {
  return (
    <div>
      <Box background="bg.muted" p={10}>
        <Text>{title}</Text>
        <Text>{text}</Text>
        <Text>{cost}</Text>
      </Box>
    </div>
  );
};
