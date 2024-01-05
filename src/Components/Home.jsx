import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1182px;
  display: flex;
  margin: 0 200px;
  height: 100vh;
  align-items: center;
`;
const Button = styled.button`
  display: flex;
  width: 220px;
  padding: 10px 18px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  border-radius: 5px;
  background: #000;
  color: white;
  cursor: pointer;
  &:hover{
    background-color: #4e4c4c;
  }
`;
const H1 = styled.h1`
  font-size: 96px;
  white-space: nowrap;
  cursor:default;
`;

function Home({toggle}) {
  return (
    <Container>
      <div>
        <img src="Images/dices 1.png" alt="Dice-img" />
      </div>
      <div>
        <H1>DICE GAME</H1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
}

export default Home;
