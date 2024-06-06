import { Box, Heading, Text } from "@chakra-ui/react";

function CyberSecurityInfo() {
  return (
    <Box p={5}>
      <Heading as="h1" size="xl" mb={4}>
        Cyber Security Information
      </Heading>
      <Text fontSize="lg">Cyber security involves protecting computer systems and networks from information disclosure, theft of or damage to their hardware, software, or electronic data, as well as from the disruption or misdirection of the services they provide.</Text>
      <Text fontSize="lg" mt={4}>
        It is a critical field in today's digital age, where cyber threats are constantly evolving and becoming more sophisticated. Effective cyber security measures are essential to safeguard sensitive information and ensure the integrity and availability of systems and data.
      </Text>
    </Box>
  );
}

export default CyberSecurityInfo;
