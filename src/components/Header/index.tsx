import { useState } from 'react';

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
  BurgerMenu,
} from './styles';

function Header() {
  const [burgerMenuActive, setBurgerMenuActive] = useState(false);

  const handleMenuToogle = () => {
    setBurgerMenuActive(!burgerMenuActive);
  };

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

        <BurgerMenu
          className={`${burgerMenuActive ? 'opened' : 'closed'} burger-menu`}
          onClick={handleMenuToogle}
        />
      </Nav>
    </StyledHeader>
  );
}

export default Header;
