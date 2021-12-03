import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {useState, useEffect} from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignupPage from "./components/SignupPage"
import LoginPage from "./components/LoginPage"
import PongPage from "./components/PongPage"
import UserStatsPage from "./components/UserStatsPage"
import SnakePage from "./components/SnakePage"
import AsteroidsPage from "./components/AsteroidsPage"
import FroggerPage from "./components/FroggerPage"
import HighScorePage from "./components/HighScorePage"

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} /> 
      <Route path="signup" element={<SignupPage />} />
      <Route path="login" element={<LoginPage />} />
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