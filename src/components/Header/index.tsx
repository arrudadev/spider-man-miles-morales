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

function Header() {
  return (
    <StyledHeader>
      <Nav>
        <NavMenu>
          <Logo className="logo" />

          <NavList className="nav-list">
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

        <NavSocial className="nav-social">
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
