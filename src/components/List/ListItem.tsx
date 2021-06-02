import { Box, Image, Text } from "@chakra-ui/react";

interface ListItemProps {
  text: string;
}

export function ListItem({ text }: ListItemProps) {
  const normalizedText = text.normalize('NFD').replace(/[\u0300-\u036f]/g, "").replaceAll(" ", "").replaceAll(".", "").toLowerCase()

  return (
    <Box>
      <Image src={`/${normalizedText}.svg`} ml='auto' mr='auto' />
      <Text mt='6'>{ text }</Text>
    </Box>
  )
}