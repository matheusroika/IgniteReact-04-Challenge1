import { Box, Text, Image } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface ContinentBannerProps {
  children: ReactNode
  isWidescreen: boolean;
}

export function ContinentBanner({ children, isWidescreen }: ContinentBannerProps) {
  const normalizedCountry = children.toString().normalize('NFD').replace(/[\u0300-\u036f]/g, "").replaceAll(" ", "").toLowerCase()

  return (
    <Box position='relative' w='100%'>
      { isWidescreen
        ? (
          <Text
            as='h1'
            position='absolute'
            bottom='14'
            left='36'
            color='gray.50'
            fontSize='5xl'
            fontWeight='semibold'
          >
            { children }
          </Text>
        )
        : (
          <Text
            as='h1'
            position='absolute'
            top='50%'
            left='50%'
            transform='translate(-50%, -50%)'
            color='gray.50'
            fontSize='1.75rem'
            fontWeight='semibold'
          >
            { children }
          </Text>
        )}
      
      <Image w='100%' src={ isWidescreen
        ? `/${normalizedCountry}/banner.jpg`
        : `/${normalizedCountry}/banner-mobile.jpg` } />
    </Box>
  )
}