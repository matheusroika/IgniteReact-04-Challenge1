import { Box, Center, Divider, Flex, ListItem, SimpleGrid, Text, UnorderedList } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { List } from "../components/List";
import { Swiper } from "../components/Swiper";

export default function Home() {
  return (
    <>
    <Header />
    <Banner />
    <UnorderedList
      stylePosition='inside'
      mx='12'
      my='9'
      textAlign='center'
      fontWeight='medium'
      fontSize='lg'
      css='li::marker {color: #FFBA08; font-size: 1.5rem;}'
    >
      <List item1='vida noturna' item2='praia' />
      <List item1='moderno' item2='clássico' marginTop='6' />
      <ListItem marginTop='6'>e mais...</ListItem>
    </UnorderedList>

    <Center mb='6'>
      <Divider orientation='horizontal' bg='gray.700' w='60px' opacity='1' />
    </Center>

    <Center>
      <Box textAlign='center' color='gray.700' fontSize='xl' fontWeight='medium'>
        <Text>Vamos nessa?</Text>
        <Text>Então escolha seu continente</Text>
      </Box>
    </Center>

    <Box mt='5' mb='6'>
      <Swiper autoHeight />
    </Box>
    
    </>
  )
}
