// import React from 'react'

const PongLivesContainer = ({lives, score}) => {
    
    return (
        <div>
            <h1>Lives</h1>
            <p>{lives}</p>
            <h1>Score</h1>
            <p>{score}</p>
        </div>
    )
}

export default PongLivesContainer
