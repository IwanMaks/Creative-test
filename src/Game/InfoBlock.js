import React from "react";
import styled from "styled-components";

const InfoBlockContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 30px;
`;

const ContentBlock = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 5px;
`;

const UserNameText = styled.p`
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 24px;
  color: #CCD4F0;
`;

const TimerText = styled.p`
  width: 100%;
  text-align: right;
  font-family: Roboto, sans-serif;
  font-weight: 800;
  font-size: 36px;
  color: #CCD4F0;
`;


export const InfoBlock = () => {
    return(
       <InfoBlockContainer>
            <ContentBlock>
                <UserNameText>
                    Гусь Бородатый
                </UserNameText>
            </ContentBlock>
           <ContentBlock>
               <TimerText>
                   00:45
               </TimerText>
           </ContentBlock>
       </InfoBlockContainer>
    )
}