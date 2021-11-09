// import React from 'react'

const textContainer = ({gameTitle, gameText}) => {
    return (
        <>
            <h1 className={gameTitle}>{gameTitle}</h1>
            <p>{gameText}</p>
        </>
    )
}

export default textContainer
