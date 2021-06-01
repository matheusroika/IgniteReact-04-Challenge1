import { Box, Flex, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ContinentDescriptionProps {
  children: ReactNode,
  countries: number,
  languages: number,
  cities: number,
}

export function ContinentDescription({ children, countries, languages, cities }: ContinentDescriptionProps) {
  return (
    <Box mx='4' mt='6'>
      <Text fontSize='sm'>{ children }</Text>
      <Flex justify='space-between' mt='4'>
        <Box>
          <Text fontWeight='semibold' fontSize='2xl' color='yellow.500'>{ countries }</Text>
          <Text fontSize='lg' color='gray.700'>países</Text>
        </Box>
        <Box>
          <Text fontWeight='semibold' fontSize='2xl' color='yellow.500'>{ languages }</Text>
          <Text fontSize='lg' color='gray.700'>línguas</Text>
        </Box>
        <Box>
          <Text fontWeight='semibold' fontSize='2xl' color='yellow.500'>{ cities }</Text>
          <Text fontSize='lg' color='gray.700'>cidades +100</Text>
        </Box>
      </Flex>
    </Box>
  )
}