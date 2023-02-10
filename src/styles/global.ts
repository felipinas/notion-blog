import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme['gray-bg']};
  }

  body, button {
    font-family: 'Inter', sans-serif;
  }
`;
