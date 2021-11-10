import React, {useState} from "react";
import styled from "styled-components";
import {InfoBlock} from "../Game/InfoBlock";
import {ProgressBar} from "../Common/ProgressBar";
import {CardList} from "../Game/CardList";

const GameContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 10% 1% 89%;
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

export const Game = () => {
    const [gameState, setGameState] = useState('not started');

    const importAll = (r) => {
        return r.keys().map(r);
    }

    const icons = importAll(require.context('../assets/icons/', false, /\.(png|jpe?g|svg)$/));

    return(
        <GameContainer>
            <InfoBlock/>
            <ProgressBar/>
            { gameState==='started' ?
                <CardList iconsArr={icons}/> :
                gameState==='finished' ?
                    <FillerContainer>
                        <FinishText>Красава</FinishText>
                    </FillerContainer> :
                    <FillerContainer>
                        <StartButton onClick={() => setGameState('started')}>
                            Начать
                        </StartButton>
                    </FillerContainer>
            }
        </GameContainer>
    )
}
