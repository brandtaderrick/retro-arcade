import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignupPage from "./components/SignupPage"
import LoginPage from "./components/LoginPage"
import PongPage from "./components/PongPage"
import SnakePage from "./components/SnakePage"

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="highscore" element={<LoginPage />} />
      <Route path="pong" element={<PongPage />} />
      <Route path="snake" element={<SnakePage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitalsx