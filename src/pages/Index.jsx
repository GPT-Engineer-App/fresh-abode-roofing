import React from "react";
import { Box, Container, Flex, Heading, Text, Button, VStack, HStack, SimpleGrid, Image, FormControl, FormLabel, Input, Textarea, Icon, Link } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaMapMarkedAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Flex bgImage="https://images.unsplash.com/photo-1635424710928-0544e8512eae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb29maW5nfGVufDB8fHx8MTcxMDE1MzE2M3ww&ixlib=rb-4.0.3&q=80&w=1080" bgPosition="center" bgRepeat="no-repeat" bgSize="cover" height="70vh" align="center" justify="center" direction="column" textAlign="center" color="white">
        <Heading as="h1" size="3xl" mb={4}>
          Abode Roofing
        </Heading>
        <Text fontSize="xl" mb={6}>
          Protecting Your Home from the Top
        </Text>
        <Button size="lg" colorScheme="blue">
          Get a Quote
        </Button>
      </Flex>

      {/* About Us Section */}
      <Container maxW="container.xl" p={10}>
        <VStack spacing={5} textAlign="center">
          <Heading as="h2" size="xl">
            About Us
          </Heading>
          <Text fontSize="lg">Abode Roofing has been providing top-notch roofing services for over a decade. Our team of experienced professionals is dedicated to ensuring the safety and satisfaction of our clients. We use the latest technology and materials to deliver long-lasting results.</Text>
          <Image borderRadius="md" src="https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb29maW5nJTIwdGVhbXxlbnwwfHx8fDE3MTAxNjQwNjJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Roofing Team" />
        </VStack>
      </Container>

      {/* Services Section */}
      <Box bg="gray.100" py={10}>
        <Container maxW="container.xl">
          <Heading as="h2" size="xl" textAlign="center" mb={6}>
            Our Services
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            {/* Service Item */}
            <Box textAlign="center">
              <Image borderRadius="md" src="https://images.unsplash.com/photo-1605450098589-d2586aafa386?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMHJvb2Zpbmd8ZW58MHx8fHwxNzEwMTY0MDYyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Residential Roofing" />
              <Heading as="h3" size="md" mt={4}>
                Residential Roofing
              </Heading>
              <Text mt={2}>We provide comprehensive roofing services for homeowners, from repairs to full replacements.</Text>
            </Box>
            {/* Service Item */}
            <Box textAlign="center">
              <Image borderRadius="md" src="https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwcm9vZmluZ3xlbnwwfHx8fDE3MTAxNjQwNjN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Commercial Roofing" />
              <Heading as="h3" size="md" mt={4}>
                Commercial Roofing
              </Heading>
              <Text mt={2}>Our team has the expertise to handle large-scale commercial roofing projects with precision.</Text>
            </Box>
            {/* Service Item */}
            <Box textAlign="center">
              <Image borderRadius="md" src="https://images.unsplash.com/photo-1610569244414-5e7453a447a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb29mJTIwbWFpbnRlbmFuY2V8ZW58MHx8fHwxNzEwMTY0MDYzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Roof Maintenance" />
              <Heading as="h3" size="md" mt={4}>
                Roof Maintenance
              </Heading>
              <Text mt={2}>Regular maintenance to ensure your roof remains in perfect condition, protecting your property.</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Container maxW="container.xl" p={10}>
        <Heading as="h2" size="xl" textAlign="center" mb={6}>
          Contact Us
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <VStack spacing={4} align="start">
            <HStack>
              <Icon as={FaPhone} w={5} h={5} />
              <Link href="tel:+1234567890" isExternal>
                +1 (234) 567-890
              </Link>
            </HStack>
            <HStack>
              <Icon as={FaEnvelope} w={5} h={5} />
              <Link href="mailto:contact@aboderoofing.com" isExternal>
                contact@aboderoofing.com
              </Link>
            </HStack>
            <HStack>
              <Icon as={FaMapMarkedAlt} w={5} h={5} />
              <Text>123 Roofing St, Roofville, RF 12345</Text>
            </HStack>
            <HStack spacing={4}>
              <Link href="#" isExternal>
                <Icon as={FaFacebook} w={6} h={6} />
              </Link>
              <Link href="#" isExternal>
                <Icon as={FaTwitter} w={6} h={6} />
              </Link>
              <Link href="#" isExternal>
                <Icon as={FaInstagram} w={6} h={6} />
              </Link>
              <Link href="#" isExternal>
                <Icon as={FaLinkedinIn} w={6} h={6} />
              </Link>
            </HStack>
          </VStack>
          <Box>
            <form>
              <VStack spacing={4}>
                <FormControl id="name" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input type="text" />
                </FormControl>
                <FormControl id="email" isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" />
                </FormControl>
                <FormControl id="message" isRequired>
                  <FormLabel>Message</FormLabel>
                  <Textarea />
                </FormControl>
                <Button type="submit" colorScheme="blue" size="md">
                  Send Message
                </Button>
              </VStack>
            </form>
          </Box>
        </SimpleGrid>
      </Container>

      {/* Footer Section */}
      <Box bg="blue.600" color="white" py={4}>
        <Container maxW="container.xl" textAlign="center">
          <Text>&copy; {new Date().getFullYear()} Abode Roofing. All rights reserved.</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
