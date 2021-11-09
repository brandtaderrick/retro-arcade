// import React from 'react'

import NameContainer from "./NameContainer"
import ScoreContainer from "./ScoreContainer"
import RankContainer from "./RankContainer"

const HighScoreContainer = () => {
    return (
        <>
        
        <h4 className="highScoreTitle">Total Score Ranking</h4>

        <div className="highScoreContainer">
        
                <div className="column">
                    <h4 className="columnTitle">Name</h4>
                    <NameContainer />
                </div>
                <div className="column"> 
                    <h4 className="columnTitle">Score</h4>
                    <ScoreContainer />
                </div>
                <div className="column">
                    <h4 className="columnTitle">
                        Rank
                    </h4>
                    <RankContainer />
                </div>
            
        </div>

        </>
    )
}

export default HighScoreContainer
