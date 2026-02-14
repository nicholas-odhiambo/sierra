import { Box, Text } from "@chakra-ui/react";

type LaunchProps = {
  image: string;
  title: string;
  description: string;
};

const LaunchCard = ({ image, title, description }: LaunchProps) => {
  return (
    <>
      <Box
        textAlign="centre"
        background="#ffffff"
        justifyContent="center"
        alignItems="centre"
        minH="40vh"
        pt="20"
        borderRadius="l1"
      >
        <image> {image}</image>
        <Text as="h1" fontWeight="bolder" fontSize="2xl">
          {title}
        </Text>
        <Text as="p">{description} </Text>
      </Box>
    </>
  );
};

export default LaunchCard;
