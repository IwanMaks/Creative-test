import React from "react";
import styled from "styled-components";

const WelcomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContainer = styled.div`
  width: 40vw;
  min-width: 280px;
  max-width: 600px;
  height: 80%;
  border-radius: 12px;
  background-color: azure;
`;

export const Welcome = () => {
    return(
        <WelcomeContainer>
            <PopupContainer>

            </PopupContainer>
        </WelcomeContainer>
    )
}