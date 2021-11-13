import React from "react";
import styled from "styled-components";

const CellContainer = styled.section`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: #272A35;
  overflow: hidden;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CellContainerHeader = styled(CellContainer)`
  background-color: #393E4D;
  border: 1px solid #272A35;
`

const CellText = styled.p`
  font-family: Roboto, sans-serif;
  font-weight: 300;
  font-size: 16px;
  
  color: #CCD4F0;
`;

export const TableCell = ({text, header = false}) => {
    return (
        header ?
            <CellContainerHeader>
                <CellText>{text}</CellText>
            </CellContainerHeader>
            :
            <CellContainer>
                <CellText>{text}</CellText>
            </CellContainer>
    )
}
