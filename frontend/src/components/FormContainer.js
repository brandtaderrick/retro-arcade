// import React from 'react'
import { useState } from "react"
import { Link } from "react-router-dom"

const FormContainer = ({hideSignupBtn}) => {

    //need a state component here...??
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
 
    const handleSubmit = event => {
        // event.preventDefault()
    
        // axios.get(`serverIP&Port//${username}`).then(resp => {
        //   props.onSubmit(resp.data)
        //   setUsername('')
        // }) #TODO
      }

    return (
        <div className="formContainer">
            <form method="post" action="/login" onSubmit="">
                <label htmlFor="userName">Username:</label>
                <input type="text" id="user_name" name="user_name" />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password"/>
                <Link to="/signup">
                <button className="signup-btn">Signup</button>
                </Link>
                <button type="submit" hidden={hideSignupBtn} className="login-btn">Login</button>
            </form>
        </div>
    )
}

export default FormContainer
