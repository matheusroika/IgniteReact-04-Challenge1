import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface CityProps {
  city: string;
  country: string;
  continent: string;
}

export function City({ city, country, continent }: CityProps) {
  const normalizedCity = city.normalize('NFD').replace(/[\u0300-\u036f]| /g, "").toLowerCase()
  const normalizedCountry = country.normalize('NFD').replace(/[\u0300-\u036f]| /g, "").toLowerCase()

  return (
    <Box w='64' ml='auto' mr='auto' borderTopRadius='4px' overflow='hidden'>
      <Image src={`/${continent}/cidades/${normalizedCity}.jpg`} />
      <Flex justify='space-between' padding='6' border='solid' borderWidth='1px' borderColor='yellow.250' borderRadius='4px'>
        <Box>
          <Text fontFamily='cityHeading' fontWeight='semibold' fontSize='xl' color='gray.700'>{ city }</Text>
          <Text fontFamily='cityBody' fontWeight='medium' fontSize='md' color='gray.400' mt='3'>{ country }</Text>
        </Box>
        <Image w='30px' h='30px' src={`/${continent}/cidades/${normalizedCountry}.svg`} />
      </Flex>
    </Box>
  )
}