// import React from 'react'
import { useState, useEffect } from 'react';
import Header from "./Header"
import HighScoreContainer from "./HighScoreContainer"
import GameTabs from "./GameTabs"

const HighScorePage = () => {

    var [globalStats, setGlobalStats] = useState(
        {
          Name: ["Derrick", "Ryan", "Sam"],
         
          Rank: ["1", "2", "3"],
    
          Score:["5", "4", "3"],
        }
      )

     
    return (
        <div>
            <Header />
            <HighScoreContainer stats={globalStats} tableTitle={"Total Score Ranking"}/>
        </div>
    )
}

export default HighScorePage
