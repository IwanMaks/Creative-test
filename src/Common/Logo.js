import React from 'react';
import styled from "styled-components";

import logo from '../assets/logo.png';

const LogoWrapper = styled.div`
  width: 300px;
  height: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 36px;
  height: 36px;
  background-size: contain;
`;

const LogoText = styled.h1`
  padding-left: 10px;
  margin: 0;
  font-family: Roboto, sans-serif;
  font-weight: 800;
  font-size: 32px;
  line-height: 36px;
  color: #2CB6EC;
  transition: 0.3s ease-in-out;
  &:hover {
    color: #6ECFF9;
    transition: 0.3s ease-in-out;
  }
`;

export const Logo = () => {
    return(
        <LogoWrapper>
            <LogoImg src={logo}/>
            <LogoText>FLIP</LogoText>
        </LogoWrapper>
    )
}
