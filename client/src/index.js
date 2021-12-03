import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {useState, useEffect, useContext, createContext} from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignupPage from "./components/SignupPage"
import LoginPage from "./components/LoginPage"
import PongPage from "./components/PongPage"
import UserStatsPage from "./components/UserStatsPage"
import SnakePage from "./components/SnakePage"
import AsteroidsPage from "./components/AsteroidsPage"
import FroggerPage from "./components/FroggerPage"
import HighScorePage from "./components/HighScorePage"

var loginText = "Login"

const handleLogin = (strUsername) => {
  console.log(strUsername)
  loginText = strUsername;
  console.log(loginText)
  localStorage.setItem("userName", strUsername )
}

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App buttonText= {localStorage.getItem("userName") ? localStorage.getItem("userName") : loginText } />} /> 
      <Route path="signup" element={<SignupPage parentRef={handleLogin}/>} />
      <Route path="login" element={<LoginPage parentRef={handleLogin} buttonText={loginText}/>} />
      <Route path="userStats" element={<UserStatsPage buttonText="Login" />} /> 
      {/* update "login" later */}
      <Route path="highscores" element={<HighScorePage />} />
      <Route path="pong" element={<PongPage />} />
      <Route path="snake" element={<SnakePage />} />
      <Route path="asteroids" element={<AsteroidsPage />} />d
      <Route path="frogger" element={<FroggerPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitalsx