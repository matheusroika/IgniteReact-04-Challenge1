import { Box, Center, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { City } from "./City";

export function CityList() {
  return (
    <Box mx={['4', '36']} mt={['8', '20']} as='section'>
      <Text as='h2' fontSize={['2xl', '4xl']} fontWeight='medium' color='gray.700'>Cidades +100</Text>
      <SimpleGrid minChildWidth='256px' spacing='10' my={['5', '10']} ml='auto' mr='auto'>
        <City city='Londres' country='Reino Unido' />
        <City city='Paris' country='França' />
        <City city='Roma' country='Itália' />
        <City city='Praga' country='República Tcheca' />
        <City city='Amsterdã' country='Holanda' />
      </SimpleGrid>
    </Box>
  )
}