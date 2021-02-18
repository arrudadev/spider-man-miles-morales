import styled from 'styled-components';

import { ReactComponent as LinesSvg } from '../../assets/svg-lines.svg';

export const Section = styled.section`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;

  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Lines = styled(LinesSvg)`
  width: 100%;
  border: 0px solid green;

  @media screen and (max-width: 960px) {
    height: 200%;
    border: 0px solid red;
  }
`;
