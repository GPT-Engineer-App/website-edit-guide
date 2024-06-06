import { Box, Heading, Text } from "@chakra-ui/react";

function LearnMore() {
  return (
    <Box p={5}>
      <Heading as="h1" size="xl" mb={4}>
        Learn More
      </Heading>
      <Text fontSize="lg">This is the Learn More page. Here you can find more information about our services.</Text>
    </Box>
  );
}

export default LearnMore;
