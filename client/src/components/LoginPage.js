// import React from 'react'
import { useState, useEffect } from "react"
import Header from "./Header"
import FormContainer from "./FormContainer"

const LoginPage = ({buttonText}) => {

    const [textFromLogin, setTextFromLogin] = useState('')

    const handleLogin = (userNameText) => {
        setTextFromLogin(userNameText);
    }
    
    useEffect(() => {
        console.log(textFromLogin);
    }, [textFromLogin])

    return (
        <div>
            <Header displayButton={true} buttonText={buttonText}/>
            <h2 className="loginHeader"> Login </h2>
            {/* #TODO Implement FormContainer and place here */}
            <FormContainer parentRef={handleLogin} hideSignupBtn={false}/>
        </div>
    )
}

export default LoginPage
