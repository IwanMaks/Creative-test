import React from "react";
import styled from "styled-components";
import {TableCell} from "./TableCell";

const TableContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const TableRow = styled.section`
  width: 100%;
  height: 40px;
  margin: 5px 0;
  display: grid;
  grid-template-columns: 5% 73% 20%;
  grid-template-rows: 100%;
  grid-column-gap: 1%;
`;

export const Table = ({users, usersKeySorted}) => {
    return(
        <TableContainer>
            {
                usersKeySorted.map((element, index) => {
                    return(
                        <TableRow>
                            <TableCell text={index+1}/>
                            <TableCell text={element}/>
                            <TableCell text={users[element]}/>
                        </TableRow>
                    )
                })
            }
        </TableContainer>
    )
}
