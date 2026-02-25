import { Tags } from "@/components/Tags";
import { Box, Button, Container, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <>
      <Box
        background="linear-gradient(to right,  #fd35e2, #ff791a)"
        py={{ base: "100px", lg: "150px" }}
        minH=""
        mt="40px"
      >
        <Container maxW="6xl">
          <Tags title="Launch with ease" />
          <Box py={5}>
            <Text
              textAlign="center"
              alignItems="center"
              color="#fff"
              fontSize="4xl"
              fontWeight="bolder"
            >
              Start your free trial today <br /> and watch your business grow
            </Text>
            <Text textAlign="center" alignItems="center" color="#ffffff">
              Dive into seamless automation, impeccable customer <br />{" "}
              interactions, and effortless integrations.{" "}
            </Text>
          </Box>
          <Box alignItems="center" textAlign="center">
            <Button p="10px">Start free trial</Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};
