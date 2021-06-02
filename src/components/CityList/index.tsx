import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { City } from "./City";

interface Cities {
  city: string;
  country: string;
}

interface CityListProps {
  cities: Cities[],
  continent: string;
}

export function CityList({ cities, continent }: CityListProps) {
  return (
    <Box mx={['4', '36']} mt={['8', '20']} as='section'>
      <Text as='h2' fontSize={['2xl', '4xl']} fontWeight='medium' color='gray.700'>Cidades +100</Text>
      <SimpleGrid minChildWidth='256px' spacing='10' my={['5', '10']} ml='auto' mr='auto'>
        { cities.map(city => (
          <City key={city.city} city={city.city} country={city.country} continent={ continent } />
        ))}
      </SimpleGrid>
    </Box>
  )
}