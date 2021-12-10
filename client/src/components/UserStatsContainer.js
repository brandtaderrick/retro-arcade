// import React from 'react'

import { useState, useEffect } from "react"
import NameContainer from "./NameContainer"
import ScoreContainer from "./ScoreContainer"
import RankContainer from "./RankContainer"
import GameTabs from "./GameTabs"

const UserStatsContainer = ({stats}) => {

    console.log("stats",stats)
    // useState for Pong, Snake, etc.
    const [scoreData, setScoreData] = useState()
    const [isLoading, setIsLoading] = useState(true)

    const handleGameClick = (e) => {
        // base logic for dynamically rendering data based on game click
        if(e.target.textContent === "Pong"){
            setScoreData(stats.Pong)
        }
        if(e.target.textContent === "Snake"){
            // if the Snake button is clicked then set the scoreData to Snake data and render it.
            setScoreData(stats.Snake)
        }
    }

    useEffect(()=>{
        // intialize display with Pong values
        setScoreData(stats.Pong)
        console.log(stats)
    }, [])

    useEffect(()=>{
        setIsLoading(false)
        console.log("scoreData:",scoreData)
    }, [scoreData])

    return (
        <>
        <h4 className="highScoreTitle">Top Scores</h4>
        <GameTabs parentRef={handleGameClick}/>

        <div className="highScoreContainer">

                <div className="columnUserStats"> 
                    <h4 className="columnTitle">Score</h4>
                    <ScoreContainer scores={isLoading ? "missed" : scoreData.Score} />
                </div>
                <div className="columnUserStats">
                    <h4 className="columnTitle">Rank</h4>
                    <RankContainer ranks={isLoading ? "missed" : scoreData.Rank} />
                </div>            
        </div>
        </>
    )
}

export default UserStatsContainer
