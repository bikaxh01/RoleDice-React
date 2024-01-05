import React, { useState } from "react";
import styled from "styled-components";

const DiceContntainer = styled.div`
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    color: #000;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    cursor: default;
  }
  img {
    width: 200px;
    height: 200px;
  }
`;

function RoleDice({CurrentDice, roledice}) {
  

  

  return (
    <DiceContntainer>
      <div onClick={ roledice}>
        <img src={`./Images/dice_${CurrentDice}.png`} alt="Dice Image" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContntainer>
  );
}

export default RoleDice;
