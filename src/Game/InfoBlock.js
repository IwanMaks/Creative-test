import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";

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

const setUserScore = (name, time) => {
    const users = JSON.parse(localStorage.getItem('users-score'))
    const newScore = {
        [name]: time
    }

    if (users !== null) {
        if (users.hasOwnProperty(name)) {
            if (users[name] > time) {
                localStorage.setItem('users-score', JSON.stringify({...users, ...newScore}))
            }
        } else {
            const concatUsers = {
                ...users,
                ...newScore
            }
            localStorage.setItem('users-score', JSON.stringify(concatUsers))
        }
    } else {
        localStorage.setItem('users-score', JSON.stringify(newScore))
    }
}


export const InfoBlock = ({gameState, name}) => {
    const [time, setTime] = useState(0)
    const dispatch = useDispatch()

    useEffect(() => {
        let interval = null;

        if (gameState === 'started') {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 1000)
            }, 1000)
        } else {
            setUserScore(name, time)
            clearInterval(interval)
        }

        return () => {
            clearInterval(interval)
        }
    }, [gameState])

    const addZero = (n) => n < 10 ? '0' + n : n

    const parseTime = (timeCount) => {
        return addZero(Math.floor((timeCount / 60000) % 60)) + ':' + addZero(Math.floor((timeCount / 1000) % 60))
    }

    return(
       <InfoBlockContainer>
            <ContentBlock>
                <UserNameText>
                    {name}
                </UserNameText>
            </ContentBlock>
           <ContentBlock>
               <TimerText>
                   {parseTime(time)}
               </TimerText>
           </ContentBlock>
       </InfoBlockContainer>
    )
}
