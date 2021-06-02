import { Box, Image, Link, Text } from "@chakra-ui/react";
import NextLink from 'next/link'
import { WidescreenProp } from "../../types/components";

interface SwiperImageProps extends WidescreenProp {
  continent: string;
  description: string;
}

export function SwiperImage({ continent, description, isWidescreen }: SwiperImageProps) {
  const normalizedContinent = continent.normalize('NFD').replace(/[\u0300-\u036f]| /g, "").toLowerCase()

  return (
    <Box position='relative' w={['auto', 'auto', 'auto', 'auto', '1240px']}>
      <NextLink href={`/continents/${normalizedContinent}`} passHref>
        <Link 
          position='absolute'
          top='50%'
          left='50%'
          transform='translate(-50%, calc(-50% + 1rem))'
          w='70%'
          fontWeight='bold'
          textAlign='center'
          color='gray.50'
          _hover={{ textDecoration: 'none', color: 'yellow.500' }}
        >
          <Text fontSize={['2xl', '2xl', '3xl', '4xl', '5xl']}>
            { continent }
          </Text>
          <Text fontSize={['sm', 'sm', 'md', 'lg', '2xl']} mt='2'>
            { description }
          </Text>
        </Link>
      </NextLink>
      <Image
        position='relative'
        zIndex={-1}
        src={ isWidescreen
          ? `${normalizedContinent}/slider.jpg`
          : `${normalizedContinent}/slider-mobile.jpg`}
        w={['100% !important', 'auto']}
      />
    </Box>
  )
}