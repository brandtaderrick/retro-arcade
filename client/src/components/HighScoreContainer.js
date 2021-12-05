// import React from 'react'
import { useState } from "react"
import NameContainer from "./NameContainer"
import ScoreContainer from "./ScoreContainer"
import RankContainer from "./RankContainer"
import GameTabs from "./GameTabs"

const HighScoreContainer = ({stats}) => {

    console.log(stats)

    // useState for Pong, Snake, etc.
    const [pongNamesData, setPongNamesData] = useState(null)
    const [snakeData, setSnakeData] = useState(null)

    const handleGameClick = (e) => {
        // base logic for dynamically rendering data based on game click
        if(e.target.textContent === "Pong"){
            console.log(stats.Pong.Name)
        }
        if(e.target.textContent === "Snake"){
            console.log(stats.Snake.Name)
        }
    }

    return (
        <>
        <h4 className="highScoreTitle">Total Score Ranking</h4>
        <GameTabs parentRef={handleGameClick}/>

        <div className="highScoreContainer">
        
                {/* <div className="column">
                    <h4 className="columnTitle">Name</h4>
                    <NameContainer names={stats.Name} />
                </div>
                <div className="column"> 
                    <h4 className="columnTitle">Score</h4>
                    <ScoreContainer scores={stats.Score} />
                </div>
                <div className="column">
                    <h4 className="columnTitle">Rank</h4>
                    <RankContainer ranks={stats.Rank} />
                </div> */}
        </div>

        </>
    )
}

export default HighScoreContainer
