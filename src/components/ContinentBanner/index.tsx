import { Box, Text, Image } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface ContinentBannerProps {
  children: ReactNode
}

export function ContinentBanner({ children }: ContinentBannerProps) {
  return (
    <Box position='relative' w='100%'>
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
      <Image src={`/europa/banner-mobile.jpg`} />
    </Box>
  )
}