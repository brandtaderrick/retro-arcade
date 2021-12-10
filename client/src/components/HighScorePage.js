// import React from 'react'
import { useState, useEffect } from 'react';
import Header from "./Header"
import HighScoreContainer from "./HighScoreContainer"
import GameTabs from "./GameTabs"

const HighScorePage = () => {

    var [globalStats, setGlobalStats] = useState(null)
    var [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      fetch('/highscores', {
        method: "post",
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => response.json()) 
      .then((json) => setGlobalStats(json))
      .then(() => setIsLoading(false))
    }, []) 

    const WaitForData = (property) => {

      if(property.pageIsLoading){
        return <> <Header /> <div>Loading...</div></>
      }
      else if(!property.pageIsLoading){
        return <> <Header /> <HighScoreContainer stats={globalStats}/> </>
      }
    }
     
    return (

        <div>
            <WaitForData pageIsLoading={isLoading} />
        </div>
    )
}

export default HighScorePage
