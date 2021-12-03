// import React from 'react'
import { useState, useEffect } from "react"
import Header from "./Header"
import FormContainer from "./FormContainer"

const LoginPage = ({buttonText, parentRef}) => {

    const [textFromLogin, setTextFromLogin] = useState(buttonText)

    // const [buttonText, setButtonText] = useState("Login");

    // useEffect(() => {
    // console.log(buttonText)
    // },[buttonText])

    const handleLogin = (userNameText) => {
        setTextFromLogin(userNameText);
        parentRef(userNameText)
    }

    useEffect(() => {
        
    }, [textFromLogin])

    return (
        <div>
            <Header displayButton={false} buttonText={textFromLogin}/>
            <h2 className="loginHeader"> Login </h2>
            {/* #TODO Implement FormContainer and place here */}
            <FormContainer parentRef={handleLogin} hideSignupBtn={false}/>
        </div>
    )
}

export default LoginPage
