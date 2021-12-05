// import React from 'react'
import { useState, useEffect } from "react"
import NameContainer from "./NameContainer"
import ScoreContainer from "./ScoreContainer"
import RankContainer from "./RankContainer"
import GameTabs from "./GameTabs"

const HighScoreContainer = ({stats}) => {

    // useState for Pong, Snake, etc.
    const [pongNamesData, setPongNamesData] = useState(null)
    const [snakeData, setSnakeData] = useState(null)

    const handleGameClick = (e) => {
        // base logic for dynamically rendering data based on game click
        if(e.target.textContent === "Pong"){
            console.log(stats.Pong.Name)
            setPongNamesData(stats.Pong.Name)
        }
        if(e.target.textContent === "Snake"){
            console.log(stats.Snake.Name)
        }
    }

    // useEffect(() => {
    //    setPongNamesData(pongNamesData)
    // }, [])


    return (
        <>
        <h4 className="highScoreTitle">Total Score Ranking</h4>
        <GameTabs parentRef={handleGameClick}/>

        <div className="highScoreContainer">
        
                <div className="column">
                    <h4 className="columnTitle">Name</h4>
                    <NameContainer names={stats ? stats.Pong.Name : "missed"} />
                </div>
                <div className="column"> 
                    <h4 className="columnTitle">Score</h4>
                    <ScoreContainer scores={stats ? stats.Pong.Score : "missed"}/>
                </div>
                <div className="column">
                    <h4 className="columnTitle">Rank</h4>
                    <RankContainer ranks={stats ? stats.Pong.Rank : "missed"} />
                </div> 
        </div>

        </>
    )
}

export default HighScoreContainer
