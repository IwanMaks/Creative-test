import React, {useState} from "react";
import styled from "styled-components";
import {Navbar} from "../Common/Navbar";
import {Welcome} from "./Welcome";
import {Game} from "./Game";
import {RatingTable} from "./RatingTable";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const ContentWrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  padding: 0 20px;
  
  background-color: #393E4D;
`;


export const Home = () => {
    const [wasWelcome, setWasWelcome] = useState(false)
    const [name, setName] = useState('')

    return(
        <Container>
            <Navbar/>
            <ContentWrapper>
                {
                    wasWelcome ?
                        <Game name={name} /> :
                        <Welcome setWasWelcome={setWasWelcome} name={name} setName={setName} />
                }
            </ContentWrapper>
        </Container>
    )
}
