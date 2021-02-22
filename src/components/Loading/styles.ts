import styled, { keyframes } from 'styled-components';

const logoSpiderman = keyframes`
  0%{
    stroke-width: 0;
    stroke-dasharray: 1 100;
    fill: transparent;
  }
  25%{
    stroke-width: 0.3;
    stroke-dasharray: 100 0;
    fill: transparent;
  }
  60%,100%{
    stroke-width: 0;
    fill: var(--white-dark);
  }
`;

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  background: linear-gradient(225deg, var(--red) 0%, var(--red-dark) 100%);

  svg {
    max-width: 144px;

    g {
      path.logo-spiderman {
        fill: transparent;
        transition: 0.7s ease;

        animation: ${logoSpiderman} 12s ease infinite alternate;
      }
    }
  }
`;
