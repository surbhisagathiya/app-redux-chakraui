import { MoonIcon, StarIcon, SunIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Heading,
  Image,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

function Dashboard() {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue("gray.200", "gray.50");

  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "morden home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Ahemdabad",
    formattedPrice: "2,50,00,000",
    reviewCount: 34,
    rating: 4,
  };
  return (
    <>
      <Box justifyContent="space-between" display="flex" ms={8}>
        <Heading as="h2">my app</Heading>
        <header>
          <Button onClick={toggleColorMode} bg="transparent" mt={1}>
            {colorMode === "light" ? (
              <MoonIcon boxSize={5} />
            ) : (
              <SunIcon boxSize={5} />
            )}
          </Button>
        </header>
      </Box>
      <Box p={5}>
        <Box
          maxW="sm"
          borderRadius="lg"
          overflow="hidden"
          bg={bg}
          color="black"
          mt={5}
        >
          <Image src={property.imageUrl} alt={property.imageAlt} />
          <Box p="6">
            <Box display="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" colorScheme="teal">
                New
              </Badge>
            </Box>
            <Box
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {property.beds} beds &bull; {property.baths} baths
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              noOfLines={1}
            >
              {property.title}
            </Box>
            <Box>
              {property.formattedPrice}
              <Box as="span" color="black.600" fontSize="sm">
                / rs
              </Box>
            </Box>
            <Box display="flex" mt="2" alignItems="center">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < property.rating ? "teal.500" : "gray.300"}
                  />
                ))}
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {property.reviewCount} reviews
              </Box>
            </Box>
            <Button variant={{ base: 'base', bg: 'bg' }} mt={4}>Visit</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Dashboard;
