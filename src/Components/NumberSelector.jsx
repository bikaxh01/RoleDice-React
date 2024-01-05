import React, { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "Black")};
`;

const NumberSelectorContainer = styled.div`
align-items: end;
flex-direction: column;
display: flex;
  .Flex {
    display: flex;
    gap: 30px;
  }
  p {
    color: #000;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

function NumberSelector({Selected, setSelected}) {
  const myarr = [1, 2, 3, 4, 5, 6];
  
  return (
    <NumberSelectorContainer>
      <div className="Flex">
        {myarr.map((value, index) => (
          <Box
            isSelected={value === Selected}
            key={index}
            onClick={() => setSelected(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
}

export default NumberSelector;
