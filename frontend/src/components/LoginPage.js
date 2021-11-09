// import React from 'react'
import Header from "./Header"
import FormContainer from "./FormContainer"

const LoginPage = ({buttonText}) => {
    return (
        <div>
            <Header buttonText={buttonText}/>
            {/* #TODO Implement FormContainer and place here */}
            <a href="/">Go back</a>
        </div>
    )
}

export default LoginPage
