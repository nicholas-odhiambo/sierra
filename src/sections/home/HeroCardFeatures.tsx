import { Box, Center, Text } from "@chakra-ui/react";

type LaunchProps = {
  image: string;
  title: string;
  description: string;
};

export const HeroCardFeatures = ({
  image,
  title,
  description,
}: LaunchProps) => {
  return (
    <>
      <Box bg="white" p="50px">
        <Center>
          <Box
            h="70px"
            w="70px"
            rounded="lg"
            bg="red.400"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <image> {image}</image>
          </Box>
        </Center>
        <Box display="flex" flexDirection="column" h="160px" rounded="2xl">
          <Text
            fontWeight="semibold"
            fontSize="2xl"
            textAlign="center"
            py={5}
            flex="1"
          >
            {title}
          </Text>
          <Text fontSize="lg" color="gray.400" textAlign="centre" flex="1">
            {description}{" "}
          </Text>
        </Box>
      </Box>
    </>
  );
};
