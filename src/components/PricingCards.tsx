import type { PricingPackage } from "@/types/pricing";
import { Box, Button, Center, List, ListItem, Text } from "@chakra-ui/react";

type PricingProps = {
  data: PricingPackage;
};

export const PricingCards = ({ data }: PricingProps) => {
  const { name, description, price, benefits } = data;
  return (
    <>
      <Box background="gray.100" p={10} rounded="2xl">
        <Text fontWeight="bolder" fontSize="lg">
          {" "}
          {name}
        </Text>
        <Text>{description}</Text>
        <Text fontWeight="bolder">
          <Text as="sup">$</Text>
          {price}
          <Text as="span" color="gray.500">
            /month
          </Text>
        </Text>
        <List>
          {benefits.map((pack, index) => (
            <ListItem key={index}>{pack}</ListItem>
          ))}
        </List>

        <Center>
          <Button>Get started</Button>
        </Center>
      </Box>
    </>
  );
};
