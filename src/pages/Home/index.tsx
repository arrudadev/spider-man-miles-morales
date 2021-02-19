import { forwardRef } from 'react';
import { Timeline, Tween } from 'react-gsap';
import Tilt from 'react-tilt';

import SpidermanMilesMorales from '../../assets/spider-man.png';
import SpidermanLogo from '../../assets/spiderman-text.png';
import BackgroundLines from '../../components/BackgroundLines';
import BackgroundVideo from '../../components/BackgroundVideo';
import Header from '../../components/Header';
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
  const TargetWithNames = forwardRef((props, targets: any) => (
    <>
      <Header
        navListRef={div => targets.set('navList', div)}
        navSocialRef={div => targets.set('navSocial', div)}
      />

      <BackgroundVideo ref={div => targets.set('backgroundVideo', div)} />

      <BackgroundLines />

      <Container>
        <WrapperContent>
          <Logo ref={(div: HTMLDivElement) => targets.set('logo', div)}>
            <img src={SpidermanLogo} alt="Spider-Man Miles Morales" />
          </Logo>

          <Description
            ref={(div: HTMLDivElement) => targets.set('description', div)}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis
            velit magna vitae mauris orci fames posuere nibh. Sit tellus amet
            facilisi sit odio pulvinar scelerisque quam et. Ultrices facilisis
            nunc massa diam, quis mi imperdiet.
          </Description>

          <WrapperButtons
            ref={(div: HTMLDivElement) => targets.set('wrapperButtons', div)}
          >
            <PreOrderButton>Pre-order now</PreOrderButton>

            <WatchTeaserButton>Watch the teaser</WatchTeaserButton>
          </WrapperButtons>

          <WrapperPlaystationMarvel
            ref={(div: HTMLDivElement) => {
              return targets.set('wrapperPlaystationMarvel', div);
            }}
          >
            <PlaystationIcon />

            <MarvelIcon />
          </WrapperPlaystationMarvel>
        </WrapperContent>

        <WrapperImage
          ref={(div: HTMLDivElement) => targets.set('wrapperImage', div)}
        >
          <Tilt options={{ scale: 1, perspective: 2200 }}>
            <Spiderman
              src={SpidermanMilesMorales}
              alt="Spider-Man Miles Morales"
            />
          </Tilt>
        </WrapperImage>
      </Container>
    </>
  ));

  return (
    <Timeline target={<TargetWithNames />}>
      <Tween
        from={{ y: 50, opacity: 0 }}
        to={{ y: 0, opacity: 1 }}
        duration={0.7}
        target="navList"
        position="-=0.5"
        ease="back.easeOut.config(1.7)"
      />

      <Tween
        from={{ y: 50, opacity: 0 }}
        to={{ y: 0, opacity: 1 }}
        duration={0.7}
        target="navSocial"
        position="-=0.5"
        ease="back.easeOut.config(1.7)"
      />

      <Tween
        from={{ y: 50, opacity: 0 }}
        to={{ y: 0, opacity: 1 }}
        duration={0.7}
        target="logo"
        position="-=0.5"
        ease="back.easeOut.config(1.7)"
      />

      <Tween
        from={{ y: 50, opacity: 0 }}
        to={{ y: 0, opacity: 1 }}
        duration={0.7}
        target="description"
        position="-=0.5"
        ease="back.easeOut.config(1.7)"
      />

      <Tween
        from={{ y: 50, opacity: 0 }}
        to={{ y: 0, opacity: 1 }}
        duration={0.7}
        target="wrapperButtons"
        position="-=0.5"
        ease="back.easeOut.config(1.7)"
      />

      <Tween
        from={{ y: 50, opacity: 0 }}
        to={{ y: 0, opacity: 1 }}
        duration={0.7}
        target="wrapperPlaystationMarvel"
        position="-=0.5"
        ease="back.easeOut.config(1.7)"
      />

      <Tween
        from={{ y: 50, opacity: 0 }}
        to={{ y: 0, opacity: 1 }}
        duration={0.7}
        target="wrapperImage"
        position="-=0.5"
        ease="back.easeOut.config(1.7)"
      />
    </Timeline>
  );
}

export default Home;
