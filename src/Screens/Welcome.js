import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setCurrentUserName} from "../store/actions/users";

const WelcomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContainer = styled.div`
  width: 40vw;
  min-width: 280px;
  max-width: 600px;
  min-height: 60%;
  max-height: 100%;
  padding: 15px 30px;
  border-radius: 12px;
  background-color: #272A35;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Heading = styled.h2`
  width: 100%;
  text-align: left;
  font-family: Roboto, sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #D9DBE9;
`;

const InfoText = styled.p`
  width: 100%;
  text-align: left;

  font-size: 18px;
  font-family: Roboto, sans-serif;
  font-weight: 300;
  color: #D9DBE9;
  line-height: 150%;
`;

const Input = styled.input`
  width: 60%;
  height: 40px;
  padding: 5px 15px;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0);
  box-shadow: none;
  border-radius: 8px;
  font-size: 16px;
  background-color: rgba(57, 62, 77, 0.5);
  color: #D9DBE9;
  transition: 0.3s ease-in-out;
  &:active, :focus {
    border: 1px solid rgba(217, 219, 233, 0.2);
    transition: 0.3s ease-in-out;
  }
  &::placeholder {
    color: rgba(217, 219, 233, 0.5)
  }
`

const Label = styled.label`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

const StartButton = styled.button`
  flex-grow: 1;
  height: 100%;
  border: none;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  color: #272A35;
  font-weight: 500;
  background-color: #2CB6EC;
  border-radius: 8px;
  margin-left: 10px;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: #6ECFF9;
    font-weight: 800;
    transition: 0.3s ease-in-out;
  }
`;

export const Welcome = ({setWasWelcome, name, setName}) => {
    const dispatch = useDispatch()

    const handleInput = (event) => {
        dispatch(setCurrentUserName(event.target.value))
        setName(event.target.value)
    }

    const handleClick = () => {
        if (name.trim()) {
            setWasWelcome(true)
        }
    }

    return(
        <WelcomeContainer>
            <PopupContainer>
                <Heading>Правила игры</Heading>
                <InfoText>
                    Вам будет представлено поле 6х6 из 18 парных карточек. Как только вы введете имя и нажмете: "Начать", запустится таймер. Вам нужно будет поочередно открывать по 2 карточки на поле. Если карточки совпадут - они удаляются с поля, если нет - вам нужно будет попробовать еще раз. Ваша цель - отгадать все пары карточек.
                </InfoText>
                <Heading>Введите ваше имя:</Heading>
                <Label>
                    <Input type="text" placeholder="Иван Иванов" onChange={handleInput} value={name}/>
                    <StartButton onClick={handleClick}>
                        Начать
                    </StartButton>
                </Label>
            </PopupContainer>
        </WelcomeContainer>
    )
}
