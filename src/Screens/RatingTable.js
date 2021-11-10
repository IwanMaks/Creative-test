import React from "react";
import styled from "styled-components";

const RatingTableContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 8% 92%;
  row-gap: 20px;
`;

const RatingTableText = styled.p`
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 48px;
  
  color: #CCD4F0;
`;

export const RatingTable = () => {
    return(
        <RatingTableContainer>
            <RatingTableText>
                Лучшие локальные результаты
            </RatingTableText>

        </RatingTableContainer>
    )
}