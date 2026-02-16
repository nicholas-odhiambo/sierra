import { Box, Center, Text } from "@chakra-ui/react";

type SierraTags = {
  title: string;
};

export const Tags = ({ title }: SierraTags) => {
  return (
    <>
      <Box rounded="lg" textAlign="center" alignItems="center">
        <Center>
          <Text> {title}</Text>
        </Center>
      </Box>
    </>
  );
};
