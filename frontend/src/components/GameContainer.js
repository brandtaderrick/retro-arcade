// import React from 'react'
import TextContainer from "./TextContainer"
// prop types must be installed 
import PropTypes from "prop-types"

const GameContainer = ({pLink,imgSrc, gameTitle}) => {
    return (
        <div className="gameContainer">
            <a href={pLink}>
            <img className="gameImg" src={imgSrc} alt="pongLogo" />
            </a>
            <TextContainer gameTitle={gameTitle}/>
            
        </div>
    )
}

GameContainer.propTypes = {
    imgSrc: PropTypes.string,
}

export default GameContainer
