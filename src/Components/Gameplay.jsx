import React from "react";
import Total_score from "./Total_score";
import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import { useState } from "react";

const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 610px;
`;

const Main = styled.div`
  display: inline-flex;
  padding: 30px 8px 1px 80px;
  flex-direction: column;
  align-items: center;
  gap: 48px;
`;

function Gameplay() {

  const [Score,SetScore]=useState(0)
  const [Selected, setSelected] = useState();
  const [CurrentDice, SetCurrentDice] = useState(5);


  const GeneraterandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roledice= ()=>{
    if(!Selected) return alert("Please Select Number");
    const randomNumber= GeneraterandomNumber(1,7)
    SetCurrentDice(randomNumber)

    if (Selected===randomNumber){
      SetScore(Score+randomNumber);
    }else{
      SetScore(Score-1)
    }
    setSelected(undefined)

  }

  return (
    <>
    <Main>
      <Top>
        <Total_score  Score={Score}/>
        <NumberSelector Selected={Selected} setSelected={setSelected} />
      </Top>
    </Main>
    <RoleDice CurrentDice={CurrentDice} roledice={roledice}/>
    </>
    
  );
}

export default Gameplay;
