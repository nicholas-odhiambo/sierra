import { Box, Flex, Text } from "@chakra-ui/react";

type Values = {
  icon: string;
  title: string;
  text: string;
};

export const PricingValuesCard = ({ icon, title, text }: Values) => {
  return (
    <>
      <Box background="white" rounded="lg" p="40px">
        <Flex align="start" gap={4}>
          <Box fontSize="2xl"> {icon}</Box>
          <Box>
            <Text fontWeight="bold" fontSize="lg">
              {title}
            </Text>
            <Text mt={2} color="gray.400">
              {text}
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
