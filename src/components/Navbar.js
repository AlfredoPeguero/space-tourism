import React from "react";
// styles
import { Nav, NavWrapper, Logo, HamburgerMenu } from "./style/Navbar.style";
import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";

export default function Navbar() {
  return (
    <Nav>
      <NavWrapper>
        <Logo src={logo} alt="logo" />
        <HamburgerMenu src={hamburger} alt="Menu" />
      </NavWrapper>
    </Nav>
  );
}
