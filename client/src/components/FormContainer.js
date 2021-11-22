// import React from 'react'
import { useState } from "react"
import { Link } from "react-router-dom"

const FormContainer = ({hideSignupBtn}) => {

    //need a state component here...??
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = () => {
        setUsername(document.getElementById("user_name"));
        setPassword(document.getElementById("password"));
        console.log(username)
        console.log(password)
    }
 
    const handleSubmit = (event) => {
        event.preventDefault()

        // let data = {
        //     _username: username,
        //     _password: password,
        // }

        fetch('/login', {
            method: "PUT",
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(response => response.json()) 
        .then(json => console.log(json));

        console.log("at the end of handleSubmit")

      }

     

    return (
        <div className="formContainer" onSubmit={handleSubmit}>
            <form method="post" action="/login" onSubmit="">
                <label htmlFor="userName">Username:</label>
                <input type="text" id="user_name" name="user_name" onChange={handleChange} />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" onChange={handleChange}/>
                <Link to="/signup">
                <button className="signup-btn">Signup</button>
                </Link>
                <button type="submit" hidden={hideSignupBtn} className="login-btn">Login</button>
            </form>
        </div>
    )
}

export default FormContainer
