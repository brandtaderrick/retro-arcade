// import React from 'react'
import { Link } from "react-router-dom"

const FormContainer = ({hideSignupBtn}) => {
    return (
        <div className="formContainer">
            <form action="">
                <label htmlFor="userName">Username:</label>
                <input type="text" id="user_name" name="user_name" />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password"/>
                <Link to="/signup">
                <button className="signup-btn">Signup</button>
                </Link>
                <button hidden={hideSignupBtn} className="login-btn">Login</button>
            </form>
        </div>
    )
}

export default FormContainer
