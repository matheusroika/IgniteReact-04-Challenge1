import { createServer, Model } from 'miragejs'

export default function() {
  createServer({
    models: {
      transaction: Model
    },
    seeds(server) {
      server.db.loadData({
        transactions: [
          {
            continent: 'Europa',
            sliderDescription: 'Conhecido como velho mundo.',
            bannerDescription: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.',
            countries: 50,
            languages: 72,
            cities100: 32,
            cities: [
              {
                city: 'Londres',
                country: 'Reino Unido'
              }
            ]
          },
          {
            continent: 'Ásia',
            sliderDescription: 'O continente mais antigo.',
            bannerDescription: 'A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial. A Ásia faz fronteira no lado ocidental com a África e com a Europa, e no lado oriental com o oceano Pacífico. O ponto extremo setentrional do continente está localizado no oceano Glacial Ártico.',
            countries: 49,
            languages: 199,
            cities100: 46,
          },
          {
            continent: 'Américas',
            sliderDescription: 'Tem de tudo um pouco.',
            bannerDescription: 'América ou Américas é o continente localizado no hemisfério ocidental e que se estende, no sentido norte-sul, desde o oceano Ártico até o cabo Horn, ao longo de cerca de 15 mil quilômetros. O seu extremo oriental insular (não-continental) encontra-se na Groenlândia, o Nordostrundingen, enquanto o ocidental localiza-se nas Aleutas.',
            countries: 36,
            languages: 34,
            cities100: 16,
          },
          {
            continent: 'Oceania',
            sliderDescription: 'Paisagens exóticas.',
            bannerDescription: "Oceania ou Oceânia é uma região geográfica composta por vários grupos de ilhas do oceano Pacífico (Polinésia, Melanésia e Micronésia). O termo Oceania foi criado em 1831 pelo explorador francês Dumont d'Urville. O termo é usado hoje em vários idiomas para designar uma região geográfica e política que compreende o continente da Austrália e ilhas do Oceano Pacífico adjacentes.",
            countries: 14,
            languages: 38,
            cities100: 3,
          },
          {
            continent: 'África',
            sliderDescription: 'Cultura impressionante.',
            bannerDescription: 'A África é o terceiro continente mais extenso com cerca de 30 milhões de quilômetros quadrados, cobrindo 20,3 % da área total da terra firme do planeta. É o segundo continente mais populoso da Terra (atrás da Ásia) com cerca de mil milhões de pessoas (estimativa para 2005), representando cerca de um sétimo da população do mundo, e 54 países independentes. Apresenta grande diversidade étnica, cultural, social e política. Dos trinta países mais pobres do mundo, pelo menos 21 são africanos.',
            countries: 54,
            languages: 60,
            cities100: 3,
          },
        ]
      })
    }
  })
}