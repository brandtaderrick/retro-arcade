// import React from 'react'

import NameContainer from "./NameContainer"
import ScoreContainer from "./ScoreContainer"
import RankContainer from "./RankContainer"
import GameTabs from "./GameTabs"

const HighScoreContainer = ({stats}) => {

    console.log(stats)
    console.log(stats.Name)

    return (
        <>
        <h4 className="highScoreTitle">Total Score Ranking</h4>
        <GameTabs />
        <div className="highScoreContainer">
        
                <div className="column">
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
                </div>
            
        </div>

        </>
    )
}

export default HighScoreContainer
