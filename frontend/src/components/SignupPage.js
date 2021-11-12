// import React from 'react'
import Header from "./Header"
import FormContainer from "./FormContainer"

const SignupPage = () => {
    return (
        <div>
            <Header />
            <h2 className="loginHeader"> Login </h2>
            {/* #TODO Implement Form Container and place here. */}
            <FormContainer hideSignupBtn={true}/>
        </div>
    )
}

export default SignupPage
