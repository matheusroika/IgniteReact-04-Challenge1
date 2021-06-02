import { UnorderedList, ListItem as ChakraListItem, Center, HStack, SimpleGrid } from "@chakra-ui/react";
import { WidescreenProp } from "../../types/components";
import { ListItem } from "./ListItem";
import { TwoListItems } from "./TwoListItems";

export function List({ isWidescreen }: WidescreenProp) {
  if (isWidescreen) {
    return (
      <Center mt='28' mb='20' fontWeight='semibold' fontSize='2xl'>
        <HStack spacing={['8', '8', '12', '24', '24']}>
          <ListItem text='vida noturna' />
          <ListItem text='praia' />
          <ListItem text='moderno' />
          <ListItem text='clássico' />
          <ListItem text='e mais...' />
        </HStack>
      </Center>
    )
  }

  return (
    <UnorderedList
      stylePosition='inside'
      mx={['8', '12']}
      my='9'
      textAlign='center'
      fontWeight='medium'
      fontSize='lg'
      css='li::marker {color: #FFBA08; font-size: 1.5rem;}'
    >
      <SimpleGrid spacing='1' gridTemplateColumns='1fr 1fr' justify='center'>
        <TwoListItems item1='vida noturna' item2='moderno' textAlign={['left', 'center']} />
        <TwoListItems item1='praia' item2='clássico' textAlign={['right', 'center']} />
      </SimpleGrid>
      <ChakraListItem marginTop='6'>e mais...</ChakraListItem>
    </UnorderedList>
  )
}