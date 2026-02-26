import type { PricingPackage } from "@/types/pricing";
import { Box, Button, List, Text } from "@chakra-ui/react";

type PricingProps = {
  data: PricingPackage;
};

export const PricingCards = ({ data }: PricingProps) => {
  const { name, description, price, package } = data;
  return (
    <>
      <Box background="gray.100" rounded="3xl" p="4px">
        <Text> {name}</Text>
        <Text>{description}</Text>
        <Text>{price}</Text>

        <Button></Button>
      </Box>
    </>
  );
};
