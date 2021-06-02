import { Box, useBreakpointValue } from "@chakra-ui/react"
import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"

import { CityList } from "../../components/CityList"
import { ContinentBanner } from "../../components/ContinentBanner"
import { ContinentDescription } from "../../components/ContinentDescription"
import { Header } from "../../components/Header"

import { continents } from '../../continents.json'

interface Cities {
  city: string;
  country: string;
}

interface ContinentProps {
  continentData: {
    slug: string;
    name: string;
    sliderDescription: string;
    bannerDescription: string;
    countries: number;
    languages: number;
    cities100: number;
    cities: Cities[]
  }
}

export default function Continent({ continentData }: ContinentProps) {
  const { slug, name, bannerDescription, countries, languages, cities100, cities } = continentData

  const isMD = useBreakpointValue({
    base: false,
    md: true,
  })

  return (
    <>
    <Head>
      <title>{ name } | worldtrip</title>
    </Head>

    <Header />
    <Box as='main'>
      <ContinentBanner isWidescreen={ isMD }>{ name }</ContinentBanner>
      <ContinentDescription countries={ countries } languages={ languages } cities={ cities100 }>{ bannerDescription }</ContinentDescription>

      <CityList cities={ cities } continent={ slug } />
    </Box>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { continent } = params
  const continentObjects = continents

  const continentData = continentObjects.find(currentContinent => currentContinent.slug === continent)

  return {
    props: {
      continentData
    },
    revalidate: 60 * 60 * 24 //24 hours
  }
}