import { ListItem as ChakraListItem, SimpleGrid, SimpleGridProps, Text } from "@chakra-ui/react";

interface TwoListItemsProps extends SimpleGridProps {
  item1: string;
  item2: string;
}

export function TwoListItems({ item1, item2, ...rest }: TwoListItemsProps) {
  return (
    <SimpleGrid minChildWidth={100} spacing='6' {...rest}>
      <ChakraListItem>
        <Text as='span'>{ item1 }</Text>
        </ChakraListItem>
      <ChakraListItem>
        <Text as='span'>{ item2 }</Text>
      </ChakraListItem>
    </SimpleGrid>
  )
}