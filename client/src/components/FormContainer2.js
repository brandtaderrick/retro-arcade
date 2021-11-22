// import React from 'react'
import { useState } from "react"
import { Link } from "react-router-dom"

const FormContainer2 = ({hideSignupBtn}) => {

    //need a state component here...??
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = () => {
        setUsername(document.getElementById("user_name").value);
        setPassword(document.getElementById("password").value);
        // console.log(username)
        // console.log(password)
    }
 
    const handleSubmit = (event) => {
        event.preventDefault()

        let data = {
            _username: username,
            _password: password,
        }

        // if hideSignupBtn = true then we are on signup page and execute post instruction; needs to be refactored to "hideLoginBtn"

        

        console.log(hideSignupBtn)

        if(hideSignupBtn){
            fetch('/signup', {
                method: "POST",
                body: JSON.stringify(data),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            })
            .then(response => response.json()) 
            .then(json => console.log(json));
            
            console.log("/signup")
        }
        else{
            fetch('/login', {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            })
            .then(response => response.json()) 
            .then(json => console.log(json));
        }

      }

    //  {hideSignupBtn ? {} : {}}

    return (
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
                <label htmlFor="userName">Username:</label>
                <input type="text" id="user_name" name="user_name" onChange={handleChange} />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" onChange={handleChange}/>
                <button type="submit" className="signup-btn">Signup</button>
                <button type="submit" hidden={hideSignupBtn} className="login-btn">Login</button>
            </form>
        </div>
    )
}

export default FormContainer2
