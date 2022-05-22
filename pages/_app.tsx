
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

import '../styles/globals.css'
import type { AppProps } from 'next/app'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
  }
  *, button, input{
    border: 0;
    outline: 0;
    font-family: 'Roboto', sans-serif;
  }
  :root {
    --primary: #36393f;
    --secondary: #2f3136;
    --tertiary: rgb(32,34,37);
    --quaternary: #292b2f;
    --quinary: #393d42;
    --senary: #828386;
    --white: #fff;
    --gray: #8a8c90;
    --chat-input: rgb(64,68,75);
    --symbol: #74777a;
    --notification: #f84a4b;
    --discord: #6e86d6;
    --mention-detail: #f9a839;
    --mention-message: #413f3f;
    --link: #5d80d6;
    --rocketseat: #6633cc;
  }
`;
const theme = {
  fontFamily: {
    brand: "Ginto",
    main: "Whitney"
  },
  colors: {
    bg: {
      dark: "#202225",
      light: "#292B2F"
    },
    white: {
      light: "#fff"
    },
    red: {
      dark: "#C03537",
      light: "#ED4245"
    },
    gray: {
      dark: "#4F545C",
      light: "#5D6269"
    },
    green: {
      dark: "#2D7D46",
      light: "#3BA55C"
    },
    blue: {
      dark: "#4752C4",
      light: "#5865F2"
    }
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}><Component {...pageProps} /> <GlobalStyle /></ThemeProvider>
}

export default MyApp
