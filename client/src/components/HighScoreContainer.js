// import React from 'react'
import { useState, useEffect } from "react"
import NameContainer from "./NameContainer"
import ScoreContainer from "./ScoreContainer"
import RankContainer from "./RankContainer"
import GameTabs from "./GameTabs"

const HighScoreContainer = ({stats}) => {

    // useState for Pong, Snake, etc.
    const [scoreData, setScoreData] = useState()
    const [isLoading, setIsLoading] = useState(true)

    const handleGameClick = (e) => {
        // base logic for dynamically rendering data based on game click
        if(e.target.textContent === "Pong"){
            console.log(stats.Pong.Name)
            setScoreData(stats.Pong)
        }
        if(e.target.textContent === "Snake"){
            setScoreData(stats.Snake)
        }
    }

    useEffect(()=>{
        // intialize display with Pong values
        setScoreData(stats.Pong)
        setIsLoading(false)
        console.log(stats)
    }, [])


    return (
        <>
        <h4 className="highScoreTitle">Total Score Ranking</h4>
        <GameTabs parentRef={handleGameClick}/>

        <div className="highScoreContainer">
        
                <div className="column">
                    <h4 className="columnTitle">Name</h4>
                    <NameContainer names={isLoading ? "missed" : scoreData.Name} />
                </div>
                <div className="column"> 
                    <h4 className="columnTitle">Score</h4>
                    <ScoreContainer scores={isLoading ? "missed" : scoreData.Score}/>
                </div>
                <div className="column">
                    <h4 className="columnTitle">Rank</h4>
                    <RankContainer ranks={isLoading ? "missed" : scoreData.Rank} />
                </div> 
        </div>

        </>
    )
}

export default HighScoreContainer
