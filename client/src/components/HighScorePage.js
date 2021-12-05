// import React from 'react'
import { useState, useEffect } from 'react';
import Header from "./Header"
import HighScoreContainer from "./HighScoreContainer"
import GameTabs from "./GameTabs"

const HighScorePage = () => {

    var [globalStatsPong, setGlobalStats] = useState(
        {
          Name: ["Derrick", "Ryan", "Sam"],
         
          Rank: ["1", "2", "3"],
    
          Score:["5", "4", "3"],
        }
      )
        // need fetch call in here for getting global stats
      // const getGlobalPongStats = () => {
      //   fetch('/pongGlobalStats', {
      //       method: "GET",
      //       headers: {"Content-type": "application/json; charset=UTF-8"}
      //   })
      //   .then(response => response.json()) 
      //   .then(json => console.log(json))
      // }
     
      useEffect(() => {
        fetch('/highscores', {
          method: "post",
          headers: {"Content-type": "application/json; charset=UTF-8"}

        })
        .then(response => response.json()) 
        .then(json => console.log(json))
      }
     ) 

     
    return (
        <div>
            <Header />
            <HighScoreContainer stats={globalStatsPong}/>
        </div>
    )
}

export default HighScorePage
