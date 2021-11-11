import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

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
  height: 60%;
  border-radius: 12px;
  background-color: azure;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Input = styled.input`
  width: 60%;
  outline: none;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 12px 15px;
  font-size: 20px;
`

const Label = styled.label`
  font-size: 24px;
  font-family: Roboto, sans-serif;
  font-weight: 600;
`

const StartButton = styled.button`
  width: 220px;
  height: 90px;
  border: none;
  font-size: 24px;
  background-color: #2CB6EC;
  outline: none;
  border-radius: 15px;
`;

export const Welcome = ({setWasWelcome, name, setName}) => {
    const handleInput = (event) => {
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
                <Label htmlFor='input-name'>Введите своё имя</Label>
                <Input id='input-name' type='text' value={name} onChange={handleInput}/>
                <StartButton onClick={handleClick}>
                    Начать
                </StartButton>
            </PopupContainer>
        </WelcomeContainer>
    )
}
