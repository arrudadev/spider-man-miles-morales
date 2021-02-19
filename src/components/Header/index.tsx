import {
  StyledHeader,
  Nav,
  NavMenu,
  Logo,
  NavList,
  NavLink,
  NavSocial,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YouTubeIcon,
} from './styles';

interface HeaderProps {
  navListRef: (element: HTMLDivElement) => any;
  navSocialRef: (element: HTMLDivElement) => any;
}

function Header({ navListRef, navSocialRef }: HeaderProps) {
  return (
    <StyledHeader>
      <Nav>
        <NavMenu ref={navListRef}>
          <Logo />

          <NavList>
            <li>
              <NavLink>Home</NavLink>
            </li>
            <li>
              <NavLink>Story</NavLink>
            </li>
            <li>
              <NavLink>Wallpapers</NavLink>
            </li>
            <li>
              <NavLink className="force-red">#BeYourself</NavLink>
            </li>
          </NavList>
        </NavMenu>

        <NavSocial ref={navSocialRef}>
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <YouTubeIcon />
        </NavSocial>
      </Nav>
    </StyledHeader>
  );
}

export default Header;
