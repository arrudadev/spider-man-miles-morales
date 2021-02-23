import styled, { css, keyframes } from 'styled-components';

import { ReactComponent as IconFacebook } from '../../assets/icon-facebook.svg';
import { ReactComponent as IconInstagram } from '../../assets/icon-instagram.svg';
import { ReactComponent as IconTwitter } from '../../assets/icon-twitter.svg';
import { ReactComponent as IconYouTube } from '../../assets/icon-youtube.svg';
import { ReactComponent as LogoSpiderManBig } from '../../assets/logo-spidermanbig.svg';

export const StyledHeader = styled.header`
  width: 100%;
  position: fixed;
  z-index: 800;
  padding-top: 16px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1440px;
  margin: 0 auto;
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const Logo = styled(LogoSpiderManBig)`
  transition: 0.3s ease;
  transform-origin: center center;
  transform-box: fill-box;

  max-width: 96px;

  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;

  li {
    margin-left: 24px;
  }

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  display: inline-block;
  text-decoration: none;

  font-size: 14px;
  letter-spacing: 2px;
  font-weight: 200;

  padding: 8px 16px;

  color: var(--gray-3);

  text-transform: uppercase;
  transition: all 0.7s ease;

  position: relative;

  cursor: pointer;

  &::after {
    content: '';
    display: block;

    position: absolute;
    top: -50px;
    left: 50%;

    margin-top: 8px;
    width: 2px;
    height: 0px;
    border-radius: 2px;

    transform: translate3d(-15%, 0, 0);
    transition: 0.7s ease;

    background: linear-gradient(
      359.94deg,
      #e11c21 0.06%,
      rgba(225, 28, 33, 0) 101.91%
    );
  }

  &:hover {
    color: var(--white-light);

    &::after {
      height: 40px;
    }
  }

  &.force-red {
    color: #ea1d22;
    font-style: italic;
  }
`;

export const NavSocial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const iconCSS = css`
  margin-left: 16px;
  width: 24px;

  cursor: pointer;

  path,
  circle {
    transition: 0.7s ease;
  }

  &:hover {
    path,
    circle {
      fill: var(--red-light);
      transform: translate3d(0, -2px, 0);
    }
  }
`;

export const FacebookIcon = styled(IconFacebook)`
  ${iconCSS}
`;

export const InstagramIcon = styled(IconInstagram)`
  ${iconCSS}
`;

export const TwitterIcon = styled(IconTwitter)`
  ${iconCSS}
`;

export const YouTubeIcon = styled(IconYouTube)`
  ${iconCSS}
`;

export const BurgerMenu = styled.div`
  width: 40px;
  height: 40px;

  display: none;
  position: relative;
  cursor: pointer;

  margin-right: 12px;

  @media screen and (max-width: 960px) {
    display: block;
  }

  &::after {
    content: '';
    display: block;

    position: absolute;
    top: 33%;
    left: 12%;

    width: 75%;
    height: 2px;
    border-radius: 2px;

    background-color: var(--red);

    transition: 1s ease;
  }

  &::before {
    content: '';
    display: block;

    position: absolute;
    top: 57%;
    left: 12%;

    width: 75%;
    height: 2px;
    border-radius: 2px;

    background-color: var(--red);

    transition: 1s ease;
  }

  &.opened::after {
    transform: rotate(225deg);
    top: 45%;
  }

  &.opened::before {
    transform: rotate(-225deg);
    top: 45%;
  }
`;

const openMobileMenu = keyframes`
  from {
    opacity: 0;
    height: 0%;
  }
  to{
    opacity: 1;
    height: 170px;
  }
`;

const closeMobileMenu = keyframes`
  from {    
    opacity: 1;
    height: 170px;
  }
  to{
    opacity: 0;
    height: 0%;
  }
`;

export const NavListMobile = styled.div`
  list-style: none;

  position: absolute;
  top: 110px;
  left: 0;

  z-index: 999;

  background-color: var(--red-dark);

  width: 100%;
  height: 170px;

  opacity: 0;

  li {
    margin-left: 24px;

    a {
      color: var(--white) !important;
    }
  }

  &.opened {
    opacity: 1;
    transition: 0.7s ease;

    animation: ${openMobileMenu} 0.5s ease;
  }

  &.closed {
    opacity: 0;
    transition: 0.7s ease;

    animation: ${closeMobileMenu} 0.5s ease;
  }

  @media screen and (min-width: 960px) {
    opacity: 0 !important;
  }
`;
