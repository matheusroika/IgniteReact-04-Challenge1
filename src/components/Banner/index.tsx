import { Box, Text, Image } from '@chakra-ui/react'

export function Banner() {
  return (
    <Box position='relative'>
      <Text
        as='h1'
        position='absolute'
        top='6'
        left='4'
        color='gray.50'
        fontWeight='medium'
        fontSize='xl'
      >
        5 Continentes,<br/>infinitas possibilidades.
      </Text>

      <Text
        position='absolute'
        bottom='6'
        left='4'
        color='gray.50'
        fontWeight='normal'
        fontSize='sm'
        marginTop='0.5'
      >
        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
      </Text>
      <Image src='banner.jpg' />
    </Box>
  )
}