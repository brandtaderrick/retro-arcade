// import React from 'react'
// #TODO need functions that intteract with server

const GameTabs = ({parentRef}) => {

    return (
        <div>
            <button onClick={parentRef} id="highScorePongBtn" className="gameTabButton">Pong</button>
            <button onClick={parentRef} className="gameTabButton">Snake</button>
            <button className="gameTabButton">Asteroids</button>
            <button className="gameTabButton">Frogger</button>
        </div>
    )
}

export default GameTabs
