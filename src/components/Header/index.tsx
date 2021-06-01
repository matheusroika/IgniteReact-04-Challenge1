import { Center, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Center as='header' height='3.125rem'>
      <Image height='5' src="/worldtrip.svg" alt="WorldTrip" />
    </Center>
  )
}