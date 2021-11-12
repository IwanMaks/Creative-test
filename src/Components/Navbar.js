import React from "react";
import styled from "styled-components";

import { Logo } from "./Logo";
import { NavLink } from "./NavLink";

const NavbarContainer = styled.section`
  width: 100%;
  min-height: 64px;
  height: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: #272A35;
`;

const NavLinksContainer = styled.nav`
  height: 100%;
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;


export const Navbar = () => {
    return(
        <NavbarContainer>
            <Logo/>
            <NavLinksContainer>
                <NavLink
                    text={'ИГРАТЬ'}
                />
                <NavLink
                    text={'РЕЙТИНГ'}
                />
            </NavLinksContainer>
        </NavbarContainer>
    )
}
