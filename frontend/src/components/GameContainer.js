// import React from 'react'
import TextContainer from "./TextContainer"
// prop types must be installed 
import PropTypes from "prop-types"

const GameContainer = ({imgSrc, gameTitle}) => {
    return (
        <div className="gameContainer">
            <img className="gameImg" src={imgSrc} alt="pongLogo" />
            <TextContainer gameTitle={gameTitle}/>
        </div>
    )
}

GameContainer.propTypes = {
    imgSrc: PropTypes.string,
}

export default GameContainer
