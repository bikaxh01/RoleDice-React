import React, { useState } from 'react'
import Home from './Components/Home' 
import Gameplay from './Components/Gameplay'
import Total_score from './Components/Total_score'


function App() {
  const[isGameStartes,SetGameStarted]=useState(true)

  const toggleplay=()=>{
    SetGameStarted((prev)=>!prev);
  }
  return (
    <>{
      isGameStartes ? <Gameplay/>:<Home toggle={toggleplay}/>
    }
    </>
  )
}

export default App