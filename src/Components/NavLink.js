import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const LinkContainer = styled.section`
  padding: 0 20px;
  height: 100%;
  min-width: 100px;
  max-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AppLink = styled.span`
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

export const NavLink = ({text}) => {
    return(
        <LinkContainer>
            <Link to={text.toLowerCase() === 'рейтинг' ? '/rating' : '/game'} style={{textDecoration: 'none'}}>
                <AppLink>{text}</AppLink>
            </Link>

        </LinkContainer>
    )
}
