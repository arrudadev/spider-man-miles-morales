import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
  }

  html, body, #root {
    width: 100%;
    height: 100vh;

    background: var(--blue-dark);
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: 'Mukta', sans-serif;
  }

  img, svg {
    display: block;
    width: 100%;
  }

  a {
    text-decoration: none;
    color: var(--white);
  }

  p {
    font-size: 14px;
    color: var(--gray-3);
    letter-spacing: 1px;
    line-height: 140%;
  }

  :root {
    --blue: #14181F;
    --blue-dark: #0A0C10;
    --blue-light: #272A31;

    --red: #EA1D22;
    --red-dark: #B31317;
    --red-light: #F02A2F;

    --white: #EDF1F7;
    --white-dark: #E5E9EF;
    --white-light: #F4F7FB;

    --gray-1: #B5B6B8;
    --gray-2: #A1A3A5;
    --gray-3: #959698;
  }
`;
