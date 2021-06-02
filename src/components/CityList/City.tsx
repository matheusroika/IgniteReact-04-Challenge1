import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface CityProps {
  city: string;
  country: string;
}

export function City({ city, country }: CityProps) {
  const normalizedCity = city.normalize('NFD').replace(/[\u0300-\u036f]/g, "").replaceAll(" ", "").toLowerCase()

  return (
    <Box w='64' ml='auto' mr='auto'>
      <Image src={`/europa/cidades/${normalizedCity}.jpg`} />
      <Flex justify='space-between' padding='6' border='solid' borderWidth='1px' borderColor='yellow.250' borderRadius='1'>
        <Box>
          <Text fontFamily='cityHeading' fontWeight='semibold' fontSize='xl' color='gray.700'>{ city }</Text>
          <Text fontFamily='cityBody' fontWeight='medium' fontSize='md' color='gray.400' mt='3'>{ country }</Text>
        </Box>
        <Image src={`/europa/cidades/${normalizedCity}.svg`} />
      </Flex>
    </Box>
  )
}