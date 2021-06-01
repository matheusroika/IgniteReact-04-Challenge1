import { Flex, FlexProps, ListItem, Text } from "@chakra-ui/react";

interface ListProps extends FlexProps {
  item1: string;
  item2: string;
}

export function List({ item1, item2, ...rest }: ListProps) {
  return (
    <Flex justify='space-between' {...rest}>
      <ListItem textAlign='left'>
        <Text as='span' ml='-4'>{ item1 }</Text>
        </ListItem>
      <ListItem textAlign='right'>
        <Text as='span' ml='-4'>{ item2 }</Text>
      </ListItem>
    </Flex>
  )
}