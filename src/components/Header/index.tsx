import { Center, Image, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export function Header() {
  return (
    <Center as='header' height={['3.125rem', '3.125rem', '6.25rem', '6.25rem', '6.25rem']}>
      <NextLink href='/'>
        <Link>
          <Image height={['5', '5', 'auto', 'auto', 'auto']} my={['0', '0', '7', '7', '7']} src="/worldtrip.svg" alt="WorldTrip" />
        </Link>
      </NextLink>
    </Center>
  )
}