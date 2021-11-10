import React from "react";
import styled from "styled-components";

const LinkContainer = styled.section`
  padding: 0 20px;
  height: 100%;
  min-width: 100px;
  max-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Link = styled.a`
  font-family: Roboto, sans-serif;
  font-weight: 800;
  font-size: 18px;
  color: #2CB6EC;
  text-decoration: none;
  letter-spacing: 2px;
  transition: 0.3s ease-in-out;
  &:hover {
    color: #6ECFF9;
    transition: 0.3s ease-in-out;
  }
  
`;

export const Navlink = ({text, link}) => {
    return(
        <LinkContainer>
            <Link href={link}>{text}</Link>
        </LinkContainer>
    )
}