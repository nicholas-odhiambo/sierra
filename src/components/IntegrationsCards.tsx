import { Box, Button, Text } from "@chakra-ui/react";

type CardsIntegrations = {
  icon: string;
  title: string;
  text: string;
  button: string;
};

export const IntegrationsCards = ({
  icon,
  title,
  text,
  button,
}: CardsIntegrations) => {
  return (
    <>
      <Box background="white" rounded="2xl">
        {icon}
        <Text>{title}</Text>
        <Text py={5}>{text}</Text>
        <Button>{button}</Button>
      </Box>
    </>
  );
};
