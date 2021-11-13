import React, {useEffect, useState, memo, useMemo} from "react";
import styled from "styled-components";

import texture from '../assets/cardTexture.jpg';
import {useDispatch, useSelector} from "react-redux";
import {setUserStep} from "../store/actions/users";

const CardContainer = styled.section`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  overflow: hidden;
  background-color: #272A35;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EmptyCardContainer = styled(CardContainer)`
  background-color: #393E4D;
`

const CardImg = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1 ;
  object-fit: cover;
`;

const CardBack = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  
  background-image: url(${texture});
  background-repeat: no-repeat;
  background-size: cover;
  filter: brightness(0.9) saturate(0.3);
`;

export const Card = ({img, initialCardState, flippedCount, game, flippedIndexes, setFlippedIndexes, setFlippedCount, id}) => {
    const [cardState, setCardState] = useState(initialCardState);
    const dispatch = useDispatch()

    useEffect(() => {
        if (flippedIndexes[2] === true && flippedIndexes.indexOf(id) > -1) {
            setTimeout(() => {
                setCardState(prevState => !prevState)
                setFlippedCount(flippedCount + 1)
                setFlippedIndexes([])
            }, 1000)
        } else if (flippedIndexes[2] === false && id === 0) {
            setFlippedCount(flippedCount + 1)
            setFlippedIndexes([])
        }
    }, [flippedIndexes])

    const onCardClick = () => {
        if (!game[id].flipped && flippedCount % 3 === 0) {
            if (!cardState) {
                dispatch(setUserStep())
            }
            setCardState(prevState => !prevState)
            setFlippedCount(flippedCount + 1)
            const newIndexes = [...flippedIndexes]
            newIndexes.push(id)
            setFlippedIndexes(newIndexes)
        } else if (
            flippedCount % 3 === 1 &&
            !game[id].flipped &&
            flippedIndexes.indexOf(id) < 0
        ) {
            if (!cardState) {
                dispatch(setUserStep())
            }
            setCardState(prevState => !prevState)
            setFlippedCount(flippedCount + 1)
            const newIndexes = [...flippedIndexes]
            newIndexes.push(id)
            setFlippedIndexes(newIndexes)
        }
    }

    return(
        <CardContainer onClick={onCardClick}>
            {img.flipped ? <EmptyCardContainer/> :
                 cardState ?
                        <CardImg src={img.img}/> :
                        <CardBack/>
            }
        </CardContainer>

    )
}
