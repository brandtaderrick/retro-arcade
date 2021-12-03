// import React from 'react'
import Header from "./Header"
import FormContainer2 from "./FormContainer2"

const SignupPage = ({parentRef}) => {

    const handleLogin = (userNameText) => {
        parentRef(userNameText)
    }

    return (
        <div>
            <Header />
            <h2 className="loginHeader"> Signup </h2>
            {/* #TODO Implement Form Container and place here. */}
            <FormContainer2 parentRef={handleLogin} hideSignupBtn={true}/>
        </div>
    )
}

export default SignupPage
