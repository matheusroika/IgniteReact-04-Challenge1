import { Box, Image, Link, Text } from "@chakra-ui/react";
import NextLink from 'next/link'

interface SwiperImageProps {
  continent: string;
  description: string;
}

export function SwiperImage({ continent, description }: SwiperImageProps) {
  const normalizedContinent = continent.normalize('NFD').replace(/[\u0300-\u036f]/g, "").replaceAll(" ", "").toLowerCase()

  return (
    <Box position='relative'>
      <NextLink href={`/${normalizedContinent}`} passHref>
        <Link 
          position='absolute'
          top='50%'
          left='50%'
          transform='translate(-50%, calc(-50% + 1rem))'
          w='70%'
          fontWeight='bold'
          textAlign='center'
          color='gray.50'
        >
          <Text fontSize='2xl'>
            { continent }
          </Text>
          <Text fontSize='sm' mt='2'>
            { description }
          </Text>
        </Link>
      </NextLink>
      <Image position='relative' zIndex={-1} src={`${normalizedContinent}/slider-mobile.jpg`} w='100%' />
    </Box>
  )
}