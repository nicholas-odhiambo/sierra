import { Box, Button, Center, Text } from "@chakra-ui/react";

type IntegrationProps = {
  icon: string;
  title: string;
  description: string;
};

export const IntergrationCards = ({
  icon,
  title,
  description,
}: IntegrationProps) => {
  return (
    <>
      <Box background="white" p="50px">
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
            {" "}
            {icon}
          </Box>
        </Center>
        <Box display="flex" flexDirection="column" h="150px" rounded="4xl">
          <Text
            fontWeight="semibold"
            fontSize="2xl"
            alignItems="center"
            textAlign="center"
            py={5}
            flex="1"
          >
            {" "}
            {title}
          </Text>
          <Text
            color="gray.400"
            alignItems="center"
            textAlign="centre"
            flex="1"
          >
            {description}
          </Text>
          <Box alignItems="center" textAlign="center">
            {" "}
            <Button>Download app</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
