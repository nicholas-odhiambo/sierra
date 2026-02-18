import { Box, Button, Image, Text } from "@chakra-ui/react";

type CardsIntegrations = {
  icon: string;
  title: string;
  text: string;
  button: string;
};

export const HeroIntegrationsCards = ({
  icon,
  title,
  text,
  button,
}: CardsIntegrations) => {
  return (
    <>
      <Box background="white" rounded="2xl" pl="4" pt="2">
        <Image src={icon} w={{ base: "60px" }} />
        <Text fontWeight="bolder" fontSize="medium" py={3}>
          {title}
        </Text>
        <Text color="gray.400">{text}</Text>
        <Button background="white" color="blackAlpha.900">
          {button}
        </Button>
      </Box>
    </>
  );
};
