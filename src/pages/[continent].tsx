import { Box, useBreakpointValue } from "@chakra-ui/react"
import { GetServerSideProps } from "next"
import Head from "next/head"
import { CityList } from "../components/CityList"
import { ContinentBanner } from "../components/ContinentBanner"
import { ContinentDescription } from "../components/ContinentDescription"
import { Header } from "../components/Header"

export default function Continent() {
  const isMD = useBreakpointValue({
    base: false,
    md: true,
  })

  return (
    <>
    <Head>
      <title>Europa | worldtrip</title>
    </Head>

    <Header />
    <Box as='main'>
      <ContinentBanner isWidescreen={isMD}>Europa</ContinentBanner>
      <ContinentDescription countries={50} languages={60} cities={24}>A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.</ContinentDescription>

      <CityList />
    </Box>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { continent } = params

  return {
    props: {
    }
  }
}