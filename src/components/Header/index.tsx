import { Center, Flex, Image, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from 'next/router'

export function Header() {
  const { asPath } = useRouter()
  
  if (asPath === '/') {
    return (
      <Center height={['3.125rem', '3.125rem', '6.25rem', '6.25rem', '6.25rem']} w='100%'>
        <Image height={['5', '5', 'auto', 'auto', 'auto']} src="/worldtrip.svg" alt="WorldTrip" />
      </Center>
    )
  }

  return (
    <Flex as='header' align='center'>
      <NextLink href='/' passHref>
        <Link ml={['4', '4', '20', '28', '36',]} px='3' py='2'>
          <Image src="/back.svg" alt="Voltar" />
        </Link>
      </NextLink>

      <Center height={['3.125rem', '3.125rem', '6.25rem', '6.25rem', '6.25rem']} w='100%'>
        <NextLink href='/' passHref>
          <Link mr={['2.25rem', '2.25rem', '6.25rem', '8.25rem', '10.25rem']}>
            <Image height={['5', '5', 'auto', 'auto', 'auto']} src="/worldtrip.svg" alt="WorldTrip" />
          </Link>
        </NextLink>
      </Center>
    </Flex>
  )
}