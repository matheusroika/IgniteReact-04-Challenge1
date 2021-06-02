import { Box, Text, Image } from '@chakra-ui/react'
import { WidescreenProp } from '../../types/components'

export function Banner({ isWidescreen }: WidescreenProp) {
  return (
    <Box position='relative'>
      <Box
        position='absolute'
        top='50%'
        left='50%'
        transform='translate(-50%, -50%)'
        w='100%'
        px={['4', '4', '12', '12', '36']}
      >
        <Text
          as='h1'
          color='gray.50'
          fontWeight='medium'
          fontSize={['xl', 'xl', '2xl', '3xl', '4xl']}
        >
          6 Continentes,<br/>infinitas possibilidades.
        </Text>

        <Text
          color='gray.50'
          fontWeight='normal'
          fontSize={['sm', 'sm', 'md', 'lg', 'xl']}
          marginTop={['0.5', '5']}
          w={['auto', 'auto', 'auto', '384px', '524px']}
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Box>
      { isWidescreen
        ? (
          <>
          <Image
            src='/airplane.svg'
            position='absolute'
            right={['4', '4', '12', '12', '36']}
            bottom='-8'
            w={['0', '0', '0', '400px', '500px']}
          />
          <Image w='100vw' src='/banner.jpg' />
          </>
        ) : <Image w='100vw' src='/banner-mobile.jpg' />
      }
    </Box>
  )
}