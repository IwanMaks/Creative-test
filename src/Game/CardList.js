import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Card} from "./Card";
import {Loading} from "../Components/Loading";

const CardListContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardListWrapper = styled.section`
  width: 60%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;

export const CardList = ({iconsArr, setGameState}) => {
    const [game, setGame] = useState([])
    const [flippedCount, setFlippedCount] = useState(0)
    const [flippedIndexes, setFlippedIndexes] = useState([])

    console.log('flipped count' ,flippedCount)

    useEffect(() => {
        const newGame = []
        for (let i = 0; i < 4; i++) {
            const firstCard = {
                id: 2 * i,
                imgId: i,
                img: iconsArr[i],
                flipped: false,
            }
            const secondCard = {
                id: 2 * i + 1,
                imgId: i,
                img: iconsArr[i],
                flipped: false,
            }

            newGame.push(firstCard)
            newGame.push(secondCard)
        }

        const shuffledGame = newGame.sort(() => Math.random() - 0.5)
        setGame(shuffledGame)
    }, [])

    useEffect(() => {
        const finished = !game.some(card => !card.flipped)

        if (finished && game.length > 0) {
            setTimeout(() => {
                setGameState('finished')
            }, 500)
        }
    }, [game])

    if (flippedIndexes.length === 2) {
        const match = game[flippedIndexes[0]].imgId === game[flippedIndexes[1]].imgId

        if (match) {
            const newGame = [...game]
            newGame[flippedIndexes[0]].flipped = true
            newGame[flippedIndexes[1]].flipped = true
            setGame(newGame)

            const newIndexes = [...flippedIndexes]
            newIndexes.push(false)
            setFlippedIndexes(newIndexes)
        } else {
            const newIndexes = [...flippedIndexes]
            newIndexes.push(true)
            setFlippedIndexes(newIndexes)
        }
    }

    if (game.length === 0) return <Loading />

    return(
        <CardListContainer>
            <CardListWrapper>
                {
                    game.map((img, index) => (
                            <Card
                                id={index}
                                game={game}
                                img={img}
                                initialCardState={0}
                                flippedCount={flippedCount}
                                setFlippedCount={setFlippedCount}
                                flippedIndexes={flippedIndexes}
                                setFlippedIndexes={setFlippedIndexes}
                                key={index}/>

                    ))
                }
            </CardListWrapper>
        </CardListContainer>
    )
}
