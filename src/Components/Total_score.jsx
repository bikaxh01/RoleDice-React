import React from "react";
import styled from "styled-components";
import Gameplay from "./Gameplay";

const Styledcontainer = styled.div`
  max-width: 200px;
  text-align: center;
  h1 {
    font-size: 100px;
    line-height: 100px;
  }
  p {
    font-size: 24px;
    font-weight: 500px;
  }
`;

function Total_score({Score}) {
  return (
    <Styledcontainer>
      <h1>{Score}</h1>
      <p>Total Score</p>
    </Styledcontainer>
  );
}

export default Total_score;
