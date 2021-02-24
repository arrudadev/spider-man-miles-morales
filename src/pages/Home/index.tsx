import React, { useEffect } from 'react';
import Tilt from 'react-tilt';

import gsap from 'gsap';

import SpidermanMilesMorales from '../../assets/spider-man.png';
import SpidermanLogo from '../../assets/spiderman-text.png';
import BackgroundLines from '../../components/BackgroundLines';
import BackgroundVideo from '../../components/BackgroundVideo';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import {
  Container,
  WrapperContent,
  WrapperImage,
  Logo,
  Description,
  WrapperButtons,
  PreOrderButton,
  WatchTeaserButton,
  WrapperPlaystationMarvel,
  PlaystationIcon,
  MarvelIcon,
  Spiderman,
} from './styles';

function Home() {
  useEffect(() => {
    const timeline = gsap.timeline();

    timeline
      .fromTo(
        '.bg-loader',
        1,
        { width: '100%' },
        {
          width: '0%',
          delay: 5,
          ease: 'Expo.easeInOut',
        },
      )
      .fromTo(
        '.bg-video',
        2,
        { width: '0%', opacity: 0 },
        { width: '100%', opacity: 1, ease: 'Power3.easeInOut' },
        '-=1',
      )
      .fromTo(
        '.logo',
        0.7,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, ease: 'Back.easeOut.config(1.7)' },
        '-=0.5',
      )
      .fromTo(
        '.nav-list',
        0.7,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, ease: 'Back.easeOut.config(1.7)' },
        '-=0.5',
      )
      .fromTo(
        '.nav-social',
        0.7,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, ease: 'Back.easeOut.config(1.7)' },
        '-=0.5',
      )
      .fromTo(
        '.burger-menu',
        0.7,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, ease: 'Back.easeOut.config(1.7)' },
        '-=0.5',
      )
      .fromTo(
        '.item-1',
        0.7,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, ease: 'Back.easeOut.config(1.7)' },
        '-=0.5',
      )

      .fromTo(
        '.item-2',
        0.7,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, ease: 'Back.easeOut.config(1.7)' },
        '-=0.5',
      )

      .fromTo(
        '.item-3',
        0.7,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, ease: 'Back.easeOut.config(1.7)' },
        '-=0.5',
      )

      .fromTo(
        '.item-4',
        0.7,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, ease: 'Back.easeOut.config(1.7)' },
        '-=0.5',
      )

      .fromTo(
        '.item-5',
        0.7,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, ease: 'Back.easeOut.config(1.7)' },
        '-=0.5',
      )
      .fromTo(
        '.bg-lines',
        7,
        { width: '0%', opacity: 0 },
        { width: '100%', opacity: 1, ease: 'Power3.easeInOut' },
        '-=5',
      );
  }, []);

  return (
    <>
      <Loading />

      <Header />

      <BackgroundVideo />

      <BackgroundLines />

      <Container>
        <WrapperContent>
          <Logo className="item-1">
            <img src={SpidermanLogo} alt="Spider-Man Miles Morales" />
          </Logo>

          <Description className="item-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis
            velit magna vitae mauris orci fames posuere nibh. Sit tellus amet
            facilisi sit odio pulvinar scelerisque quam et. Ultrices facilisis
            nunc massa diam, quis mi imperdiet.
          </Description>

          <WrapperButtons className="item-3">
            <PreOrderButton>Pre-order now</PreOrderButton>

            <WatchTeaserButton>Watch the teaser</WatchTeaserButton>
          </WrapperButtons>

          <WrapperPlaystationMarvel className="item-4">
            <PlaystationIcon />

            <MarvelIcon />
          </WrapperPlaystationMarvel>
        </WrapperContent>

        <WrapperImage className="item-5">
          <Tilt options={{ scale: 1, perspective: 2200 }}>
            <Spiderman
              src={SpidermanMilesMorales}
              alt="Spider-Man Miles Morales"
            />
          </Tilt>
        </WrapperImage>
      </Container>
    </>
  );
}

export default Home;
