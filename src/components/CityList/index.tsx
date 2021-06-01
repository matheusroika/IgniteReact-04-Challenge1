import { Box, Text } from "@chakra-ui/react";
import { City } from "./City";

export function CityList() {
  return (
    <Box mx='4' mt='8' as='section'>
      <Text as='h2' fontSize='2xl' fontWeight='medium' color='gray.700'>Cidades +100</Text>
      <City city='Londres' country='Reino Unido' />
      <City city='Paris' country='França' />
      <City city='Roma' country='Itália' />
      <City city='Praga' country='República Tcheca' />
      <City city='Amsterdã' country='Holanda' />
    </Box>
  )
}