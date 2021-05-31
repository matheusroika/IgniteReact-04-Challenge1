import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      "700": "#47585B",
      "400": "#999999",
      "200": "rgba(153, 153, 153, 0.5)",
      "100": "#DADADA",
      "50": "#F5F8FA"
    },
    yellow: {
      "500": "#FFBA08",
      "250": "rgba(255, 186, 8, 0.5)"
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
    cityHeading: 'Barlow',
    cityBody: 'Barlow'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.700'
      }
    }
  }
})