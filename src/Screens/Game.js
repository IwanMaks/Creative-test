import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {InfoBlock} from "../Game/InfoBlock";
import {CardList} from "../Game/CardList";
import {useDispatch, useSelector} from "react-redux";
import {loadImg} from "../store/actions/images";
import {Loading} from "../Common/Loading";

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
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 220px;
  height: 90px;
  border: none;
  font-size: 24px;
  background-color: #2CB6EC;
  outline: none;
  border-radius: 12px;
  font-family: Roboto, sans-serif;
  color: #272A35;
  font-weight: 500;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: #6ECFF9;
    font-weight: 800;
    transition: 0.3s ease-in-out;
  }
`;

const FinishText = styled.p`
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 36px;
  color: #CCD4F0;
  margin-bottom: 10px;
`;

export const Game = ({name}) => {
    const dispatch = useDispatch()
    const [gameState, setGameState] = useState('started');


    useEffect(() => {
        dispatch(loadImg())
    }, [])

    const imgs = useSelector(state => state.images.imgs)

    if (imgs.length === 0) return <FillerContainer><Loading /></FillerContainer>

    return (
        <GameContainer>
            <InfoBlock gameState={gameState} name={name}/>
            {gameState === 'started' ?
                <CardList iconsArr={imgs} setGameState={setGameState}/> :
                gameState === 'finished' &&
                <FillerContainer>
                    <FinishText>Попробовать еще раз?</FinishText>
                    <Button onClick={() => setGameState('started')}>Рестарт</Button>
                </FillerContainer>
            }
        </GameContainer>
    )
}
