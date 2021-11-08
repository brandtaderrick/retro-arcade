import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import GameContainer from './components/GameContainer';
import pongSrc from "./assets/Images/Pong.png"
import froggerSrc from "./assets/Images/Frogger.jpg"
import asteroidsSrc from "./assets/Images/Asteroids.jpg"
import Footer from './components/Footer';
import Button from './components/Button';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import { Outlet, Link } from 'react-router-dom';

function App() {

  const[pongLogo, setPongLogo] = useState("../assets/Images/Pong.png")
  const pongTitle = "Pong"
  const froggerTitle = "Frogger"
  const asteroidsTitle = "Asteroids"

  const homeLink = "/"
  const pongLink = "/pong"
  const snakeLink = "/snake"
  const asteroidsLink = "/asteroids"
  // $TODO
  const loginLink = "/login"
  const highScoreLink = "/highscores"
  
  return (
      <div>
        <Header pLink={loginLink} buttonText="Login"/>
        <GameContainer pLink={pongLink} imgSrc={pongSrc} gameTitle={pongTitle} />
        <GameContainer pLink={snakeLink} imgSrc={froggerSrc} gameTitle={froggerTitle}/>
        <GameContainer pLink={asteroidsLink} imgSrc={asteroidsSrc} gameTitle={asteroidsTitle}/>
        <Button pLink={highScoreLink} buttonText="High Scores" />
        <Footer />
        <Link to="/signup">Link</Link>
      </div>
  );
}

export default App;
