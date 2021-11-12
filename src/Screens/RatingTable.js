import React, {useEffect} from "react";
import styled from "styled-components";
import {Table} from "../Common/Table";
import {useDispatch, useSelector} from "react-redux";
import {loadUsers} from "../store/actions/users";

const RatingTableContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 0;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 1fr 9fr;
  grid-row-gap: 20px;
  overflow: auto;
`;

const RatingTableHeader = styled.section`
  grid-area: 1 / 1 / 2 / 4;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RatingTableText = styled.p`
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 28px;
  
  color: #CCD4F0;
`;

const TableWrapper = styled.section`
  grid-area: 2 / 2 / 3 / 3;
  height: 100%;
  width: 100%;
  padding-right: 6px;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 6px;
    background-color: #393E4D;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #272A35;
    border-radius: 6px;
  }
`;

const ZeroText = styled.p`
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 36px;
  color: #CCD4F0;
  margin-bottom: 10px;
`;

const FillerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


export const RatingTable = () => {
    const dispatch = useDispatch()
    let keysSorted;

    useEffect(() => {
        dispatch(loadUsers())
    }, [])

    const users = useSelector(state => state.users.score)

    if (!users) {
        return <FillerContainer><ZeroText>Пока нет результатов :(</ZeroText></FillerContainer>
    } else {
        keysSorted = Object.keys(users).sort(function(a,b){return users[a]-users[b]})
    }

    return(
        <RatingTableContainer>
            <RatingTableHeader>
                <RatingTableText>
                    Лучшие локальные результаты
                </RatingTableText>
            </RatingTableHeader>
            <TableWrapper>
                <Table
                    users={users}
                    usersKeySorted={keysSorted}
                />
            </TableWrapper>
        </RatingTableContainer>
    )
}
