import { Container, Text, VStack, Box, Heading, Button, HStack, IconButton, Image, SimpleGrid, Flex, Avatar, Stack, Input, Textarea, FormControl, FormLabel } from "@chakra-ui/react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FaShieldAlt, FaSearch, FaClipboardCheck, FaExclamationTriangle, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  const navigate = useNavigate();
  const handleButtonClick = useCallback(
    (label) => {
      if (label === "Learn More") {
        navigate("/learn-more");
      } else if (label === "Get Started") {
      }
    },
    [navigate],
  );
  return (
    <Container maxW="container.xl" p={4}>
      {/* Main Banner */}
      <Box bg="gray.800" color="white" py={20} textAlign="center">
        <VStack spacing={4}>
          <Image src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwc2hpZWxkfGVufDB8fHx8MTcxNzY2Njg0NHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Cybersecurity Shield" boxSize="300px" />
          <Heading as="h1" size="2xl">
            Securing Your Digital World
          </Heading>
          <Text fontSize="xl">Expert Cybersecurity Services & Training Solutions</Text>
          <HStack spacing={4}>
            <Button colorScheme="teal" size="lg" onClick={() => handleButtonClick("Learn More")}>
              Learn More
            </Button>
            <Button colorScheme="orange" size="lg" onClick={() => handleButtonClick("Get Started")}>
              Get Started
            </Button>
          </HStack>
        </VStack>
      </Box>

      {/* Service Highlights */}
      <Box py={20}>
        <Heading as="h2" size="xl" textAlign="center" mb={10}>
          Our Services
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          <Box textAlign="center">
            <IconButton aria-label="Penetration Testing" icon={<FaShieldAlt />} size="lg" isRound />
            <Heading as="h3" size="md" mt={4}>
              Penetration Testing
            </Heading>
            <Text>Simulate real-world attacks to identify vulnerabilities.</Text>
            <Button mt={4} colorScheme="teal" onClick={() => handleButtonClick("Learn More - Penetration Testing")}>
              Learn More
            </Button>
          </Box>
          <Box textAlign="center">
            <IconButton aria-label="Vulnerability Assessment" icon={<FaSearch />} size="lg" isRound />
            <Heading as="h3" size="md" mt={4}>
              Vulnerability Assessment
            </Heading>
            <Text>Identify and address potential security weaknesses.</Text>
            <Button mt={4} colorScheme="teal" onClick={() => handleButtonClick("Learn More - Vulnerability Assessment")}>
              Learn More
            </Button>
          </Box>
          <Box textAlign="center">
            <IconButton aria-label="Security Audits" icon={<FaClipboardCheck />} size="lg" isRound />
            <Heading as="h3" size="md" mt={4}>
              Security Audits
            </Heading>
            <Text>Comprehensive reviews of your security posture.</Text>
            <Button mt={4} colorScheme="teal" onClick={() => handleButtonClick("Learn More - Security Audits")}>
              Learn More
            </Button>
          </Box>
          <Box textAlign="center">
            <IconButton aria-label="Incident Response" icon={<FaExclamationTriangle />} size="lg" isRound />
            <Heading as="h3" size="md" mt={4}>
              Incident Response
            </Heading>
            <Text>Rapid action plans to mitigate cyber incidents.</Text>
            <Button mt={4} colorScheme="teal" onClick={() => handleButtonClick("Learn More - Incident Response")}>
              Learn More
            </Button>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Introduction Section */}
      <Box py={20} textAlign="center">
        <Heading as="h2" size="xl" mb={4}>
          Welcome to B&J CyberGuard Solutions
        </Heading>
        <Text fontSize="lg">Your trusted partner in cybersecurity. We provide top-notch security services and comprehensive training programs to safeguard your digital assets. Whether you're looking to protect your business from cyber threats or enhance your team's security skills, we have the expertise to meet your needs.</Text>
      </Box>

      {/* Testimonials */}
      <Box py={20} bg="gray.100">
        <Heading as="h2" size="xl" textAlign="center" mb={10}>
          Testimonials
        </Heading>
        <Flex justify="center">
          <Box textAlign="center" maxW="md">
            <Avatar size="xl" name="John Doe" src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbGllbnQlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTc2NjY4NDR8MA&ixlib=rb-4.0.3&q=80&w=1080" mb={4} />
            <Text fontSize="lg" fontStyle="italic">
              "B&J CyberGuard Solutions significantly improved our security posture. Their expertise and dedication are unmatched."
            </Text>
            <Text fontWeight="bold" mt={4}>
              John Doe, CEO of SecureTech
            </Text>
          </Box>
        </Flex>
      </Box>

      {/* About Us */}
      <Box py={20}>
        <Heading as="h2" size="xl" textAlign="center" mb={10}>
          About Us
        </Heading>
        <Text fontSize="lg" mb={4}>
          B&J CyberGuard Solutions was founded with a mission to provide unparalleled cybersecurity services and training. Our founders, Bridges and Hyun Lee Joo, bring over 20 years of combined experience in the industry, ensuring that our clients receive expert guidance and cutting-edge solutions.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt={10}>
          <Box textAlign="center">
            <Avatar size="2xl" name="Bridges Mwashighadi" src="https://images.unsplash.com/photo-1429041966141-44d228a42775?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxCcmlkZ2VzJTIwTXdhc2hpZ2hhZGl8ZW58MHx8fHwxNzE3NjY2ODQ1fDA&ixlib=rb-4.0.3&q=80&w=1080" mb={4} />
            <Heading as="h3" size="md">
              Bridges Mwashighadi
            </Heading>
            <Text>Co-Founder & CEO</Text>
          </Box>
          <Box textAlign="center">
            <Avatar size="2xl" name="Hyun Lee Joo" src="https://images.unsplash.com/photo-1698132979628-13399fa2c1dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxIeXVuJTIwTGVlJTIwSm9vfGVufDB8fHx8MTcxNzY2Njg0NXww&ixlib=rb-4.0.3&q=80&w=1080" mb={4} />
            <Heading as="h3" size="md">
              Hyun Lee Joo
            </Heading>
            <Text>Co-Founder & Chief Technology Officer (CTO)</Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Contact Us */}
      <Box py={20} bg="gray.100">
        <Heading as="h2" size="xl" textAlign="center" mb={10}>
          Contact Us
        </Heading>
        <Flex justify="center">
          <Box maxW="md" w="full">
            <Stack spacing={4}>
              <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="subject">
                <FormLabel>Subject</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="message">
                <FormLabel>Message</FormLabel>
                <Textarea />
              </FormControl>
              <Button colorScheme="teal" size="lg" onClick={() => handleButtonClick("Submit")}>
                Submit
              </Button>
            </Stack>
            <Text mt={4} textAlign="center">
              Feel free to reach out to us for any inquiries or support.
            </Text>
            <Text mt={2} textAlign="center">
              Email: bridgesmwashighadi2@gmail.com
            </Text>
          </Box>
        </Flex>
      </Box>

      {/* Footer with Social Media Links */}
      <Box py={4} bg="gray.800" color="white" textAlign="center">
        <HStack justify="center" spacing={4}>
          <IconButton aria-label="Facebook" icon={<FaFacebook />} isRound />
          <IconButton aria-label="Twitter" icon={<FaTwitter />} isRound />
          <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} isRound />
        </HStack>
      </Box>
    </Container>
  );
};

export default Index;
