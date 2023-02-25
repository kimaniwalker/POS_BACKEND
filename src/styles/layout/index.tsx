import { createGlobalStyle } from "styled-components";
import { Poppins } from 'next/font/google'


const poppins = Poppins({ subsets: ['latin'],
weight:['100','300','600','900'] })

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${poppins.style.fontFamily}
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    h1 {
        font-weight: 900;
        font-size: 3rem;
    }

    h2 {
        font-weight: 600;
        font-size: 2rem;
    }

    h3 {
        font-weight: 300;
        font-size: 1.75rem;
    }

    h4, h5, h6 {
        font-weight: 300;
        font-size: 1.5rem;
    }

    p {
        font-weight: 100;
        font-size: 1.25rem;
    }
    button {
        font-family: ${poppins.style.fontFamily};
        font-weight: 600;   
    }

    * {
      box-sizing: border-box;
    }
  

  // anything else you would like to include
`;

