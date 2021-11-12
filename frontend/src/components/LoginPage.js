// import React from 'react'
import Header from "./Header"
import FormContainer from "./FormContainer"

const LoginPage = ({buttonText}) => {
    return (
        <div>
            <Header displayButton={false} buttonText={buttonText}/>
            <h2 className="loginHeader"> Login </h2>
            {/* #TODO Implement FormContainer and place here */}
            <FormContainer hideSignupBtn={false}/>
        </div>
    )
}

export default LoginPage
