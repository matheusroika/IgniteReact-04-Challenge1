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
    <Box mx={['4', '10', '20', '28', '36']} mt={['6', '8', '10', '14', '20']} display={['block', 'block', 'block', 'block', 'flex']}>
      <Text fontSize={['sm', 'md', 'lg', 'xl', '2xl']} display={['block', 'block', 'block', 'block', 'inline-block']} w={['auto', 'auto', 'auto', 'auto', '50%']} mr={['0', '0', '0', '0', '16']}>{ children }</Text>
      <Flex justify='space-between' align='center' mt='4' ml='auto' w={['auto', 'auto', 'auto', 'auto', '40%']} textAlign={['left', 'center']}>
        <Box>
          <Text fontWeight='semibold' fontSize={['2xl', '5xl']} color='yellow.500'>{ countries }</Text>
          <Text fontSize={['lg', '2xl']} fontWeight={['normal', 'semibold']} color='gray.700'>países</Text>
        </Box>
        <Box>
          <Text fontWeight='semibold' fontSize={['2xl', '5xl']} color='yellow.500'>{ languages }</Text>
          <Text fontSize={['lg', '2xl']} fontWeight={['normal', 'semibold']} color='gray.700'>línguas</Text>
        </Box>
        <Box>
          <Text fontWeight='semibold' fontSize={['2xl', '5xl']} color='yellow.500'>{ cities }</Text>
          <Text fontSize={['lg', '2xl']} fontWeight={['normal', 'semibold']} color='gray.700'>cidades +100</Text>
        </Box>
      </Flex>
    </Box>
  )
}