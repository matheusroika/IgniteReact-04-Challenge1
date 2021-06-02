import { Box, Center, Divider, Text, useBreakpointValue } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Head from "next/head";

import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { List } from "../components/List";
import { Swiper } from "../components/Swiper";

import { continents } from '../continents.json'

interface Continent {
  name: string;
  sliderDescription: string;
}

interface HomeProps {
  continents: Continent[]
}

export default function Home({ continents }: HomeProps) {
  const isMD = useBreakpointValue({
    base: false,
    md: true,
  })

  const isLG = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <>
    <Head>
      <title>worldtrip</title>
    </Head>

    <Header />
    <Banner isWidescreen={ isMD } />
    <List isWidescreen={ isMD } />

    <Center mb={['6', '14']}>
      <Divider orientation='horizontal' bg='gray.700' w='60px' opacity='1' />
    </Center>

    <Center>
      <Box textAlign='center' color='gray.700' fontSize={['xl', 'xl', '2xl', '3xl', '4xl']} fontWeight='medium'>
        <Text>Vamos nessa?</Text>
        <Text>Então escolha seu continente</Text>
      </Box>
    </Center>

    <Box mt={['5', '14']} mb={['6', '10']}>
      <Swiper isWidescreen={ isLG } continents={ continents } />
    </Box>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const continentsObject = continents.map(continent => {
    return {
      name: continent.name,
      sliderDescription: continent.sliderDescription
    }
  })

  return {
    props: {
      continents: continentsObject
    },
    revalidate: 60 * 60 * 24 //24 hours
  }
}