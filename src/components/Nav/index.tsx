/** @jsxImportSource @emotion/react */
import { useState } from "react";
import {
  menuBarStyle,
  mobileMenuHiddenStyle,
  mobileMenuStyle,
  mobileMenuVisibleStyle,
  navContainerStyle,
} from "./styles";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { css } from "@emotion/react";
function Nav() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div css={navContainerStyle}>
      <Bars3Icon
        css={menuBarStyle}
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      />
      <ul
        css={css`
          ${mobileMenuStyle};
          ${showMobileMenu ? mobileMenuVisibleStyle : mobileMenuHiddenStyle}
        `}
      >
        <li>Movies</li>
        <li>TV Series</li>
        <li>My Stuff</li>
      </ul>
    </div>
  );
}

export default Nav;
