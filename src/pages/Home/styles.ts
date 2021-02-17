import styled from 'styled-components';

import { ReactComponent as IconMarvel } from '../../assets/marvel.svg';
import { ReactComponent as IconPlaystation } from '../../assets/playstation.svg';

export const Container = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  padding: 36px 16px;

  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: row;

  overflow: hidden;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    align-items: flex-start;

    padding-top: 144px;

    height: auto;
  }
`;

export const WrapperContent = styled.div`
  max-width: 580px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  z-index: 800;

  @media screen and (max-width: 960px) {
    max-width: 960px;
    order: 2;
  }
`;

export const WrapperImage = styled.div`
  flex-grow: 5;
`;

export const Logo = styled.div`
  padding-left: 8px;
  padding-right: 8px;
`;

export const Description = styled.p`
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const WrapperButtons = styled.div`
  display: flex;

  margin-top: 8px;
`;

export const PreOrderButton = styled.a`
  display: inline-block;
  background: linear-gradient(
    267.72deg,
    var(--red-light) 0.88%,
    var(--red) 100%
  );
  border-radius: 3px;

  padding: 12px 32px;
  text-transform: uppercase;

  transform: skewX(-10deg);
  transition: 0.7s ease;

  position: relative;

  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    display: block;
    top: -2px;
    left: -2px;

    border-radius: 3px;
    opacity: 0;

    width: 20%;
    height: 70%;
    z-index: -1;

    border-top: 3px solid var(--white);
    border-left: 3px solid var(--white);

    transition: 0.7s ease;
  }

  &::before {
    content: '';
    position: absolute;
    display: block;
    bottom: -2px;
    right: -2px;

    border-radius: 3px;
    opacity: 0;

    width: 20%;
    height: 70%;
    z-index: -1;

    border-bottom: 3px solid var(--white);
    border-right: 3px solid var(--white);

    transition: 0.7s ease;
  }

  &:hover {
    box-shadow: 0px 14px 85px rgba(240, 42, 47, 0.06),
      0px 5.11023px 31.0264px rgba(240, 42, 47, 0.0413989),
      0px 2.48092px 15.0627px rgba(240, 42, 47, 0.0333774),
      0px 1.21619px 7.38404px rgba(240, 42, 47, 0.0266226),
      0px 0.480885px 2.91966px rgba(240, 42, 47, 0.0186011);

    transform: scale(1.05) skewX(-10deg);

    &::after {
      opacity: 1;
      top: -2px;
      left: -2px;
    }
    &::before {
      opacity: 1;
      bottom: -2px;
      right: -2px;
    }
  }
`;

export const WatchTeaserButton = styled.a`
  display: inline-block;
  background: transparent;
  border-radius: 3px;
  border: 2px solid var(--red);

  padding: 10px 32px;
  text-transform: uppercase;

  transform: skewX(-10deg);
  transition: 0.7s ease;

  overflow: hidden;
  z-index: 700;

  position: relative;

  margin-left: 16px;

  cursor: pointer;

  @media screen and (max-width: 960px) {
    display: none;
  }

  &::after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: -5px;

    background: linear-gradient(
      267.72deg,
      var(--red-light) 0.88%,
      var(--red) 100%
    );
    border-radius: 3px;

    width: 0%;
    height: 110%;
    z-index: -1;

    transition: 0.7s ease;
  }

  &:hover {
    box-shadow: 0px 14px 85px rgba(240, 42, 47, 0.06),
      0px 5.11023px 31.0264px rgba(240, 42, 47, 0.0413989),
      0px 2.48092px 15.0627px rgba(240, 42, 47, 0.0333774),
      0px 1.21619px 7.38404px rgba(240, 42, 47, 0.0266226),
      0px 0.480885px 2.91966px rgba(240, 42, 47, 0.0186011);

    transform: scale(1.05) skewX(-10deg);

    &::after {
      opacity: 1;
      width: 120%;
    }
  }
`;

export const WrapperPlaystationMarvel = styled.div`
  display: flex;
  align-items: center;

  margin-top: 16px;
`;

export const PlaystationIcon = styled(IconPlaystation)`
  width: auto;
  cursor: pointer;
`;

export const MarvelIcon = styled(IconMarvel)`
  width: auto;

  margin-left: 16px;

  cursor: pointer;
`;

export const Spiderman = styled.img`
  width: 130%;
  transition: 0.7s ease;
  transform: translate3d(-150px, -50px, 0);

  @media screen and (min-width: 1440px) {
    transform: translate3d(-190px, -20px, 0);
    width: 140%;
  }

  @media screen and (max-width: 960px) {
    transform: translate3d(0, -20px, 0);
    width: 100%;
  }
`;
