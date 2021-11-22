// import React from 'react'

// Composition in Class Diagram #TODO Look at UML Slides
const Button = ({pLink, buttonText}) => {
    return (
        <>
        <a href={pLink}>
         <button className="signup_btn">{buttonText}</button>   
        </a>
        </>
    )
}

export default Button
