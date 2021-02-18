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
  return (
    <>
      <Header />

      <BackgroundVideo />

      <BackgroundLines />

      <Container>
        <WrapperContent>
          <Logo>
            <img src={SpidermanLogo} alt="Spider-Man Miles Morales" />
          </Logo>

          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis
            velit magna vitae mauris orci fames posuere nibh. Sit tellus amet
            facilisi sit odio pulvinar scelerisque quam et. Ultrices facilisis
            nunc massa diam, quis mi imperdiet.
          </Description>

          <WrapperButtons>
            <PreOrderButton>Pre-order now</PreOrderButton>

            <WatchTeaserButton>Watch the teaser</WatchTeaserButton>
          </WrapperButtons>

          <WrapperPlaystationMarvel>
            <PlaystationIcon />

            <MarvelIcon />
          </WrapperPlaystationMarvel>
        </WrapperContent>

        <WrapperImage>
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
