import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {InfoBlock} from "../Game/InfoBlock";
import {ProgressBar} from "../Common/ProgressBar";
import {CardList} from "../Game/CardList";
import {useDispatch, useSelector} from "react-redux";
import {loadImg} from "../store/actions/images";
import {loadUsers} from "../store/actions/users";
import {RatingTable} from "./RatingTable";

const GameContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 10% 90%;
`;

const FillerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StartButton = styled.button`
  width: 220px;
  height: 90px;
  border: none;
  font-size: 24px;
  background-color: #2CB6EC;
  outline: none;
  border-radius: 15px;
`;

const FinishText = styled.p`
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 36px;
  color: #CCD4F0;
`;

export const Game = ({name}) => {
    const dispatch = useDispatch()
    const [gameState, setGameState] = useState('started');


    useEffect(() => {
        dispatch(loadImg())
        dispatch(loadUsers())
    }, [])

    const imgs = useSelector(state => state.images.imgs)

    if (imgs.length === 0) return <div>Loading....</div>

    return(
        <GameContainer>
            <InfoBlock gameState={gameState} name={name}/>
            { gameState==='started' ?
                <>
                    {/*<ProgressBar/>*/}
                    <CardList iconsArr={imgs} setGameState={setGameState}/>
                </> :
                gameState==='finished' &&
                    <FillerContainer>
                        <RatingTable />
                    </FillerContainer>
            }
        </GameContainer>
    )
}
