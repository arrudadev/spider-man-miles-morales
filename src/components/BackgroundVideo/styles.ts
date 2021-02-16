import styled from 'styled-components';

export const Section = styled.section`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: '';

    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;

    display: block;

    background: linear-gradient(
      110deg,
      var(--blue-dark) 25%,
      rgba(11, 12, 16, 0.8) 50%,
      var(--blue-dark) 70%
    );
  }
`;

export const Video = styled.video`
  height: 100%;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;
