import SpidermanVideo from '../../videos/spiderman.mp4';
import { Section, Video } from './styles';

function BackgroundVideo() {
  return (
    <Section>
      <Video autoPlay muted loop>
        <source src={SpidermanVideo} type="video/mp4" />
      </Video>
    </Section>
  );
}

export default BackgroundVideo;
