import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import GameContainer from './components/GameContainer';
import pongSrc from "./assets/Images/Pong.png"
import froggerSrc from "./assets/Images/Frogger.jpg"
import asteroidsSrc from "./assets/Images/Asteroids.jpg"
import snakeSrc from "./assets/Images/SnakeLogo.png"
// ________________________________________
import Footer from './components/Footer';
import Button from './components/Button';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import { Outlet, Link } from 'react-router-dom';

function App() {

  const[pongLogo, setPongLogo] = useState("../assets/Images/Pong.png")
  const pongTitle = "Pong"
  const snakeTitle = "Snake"
  const asteroidsTitle = "Asteroids"
  const froggerTitle = "Frogger"

  const homeLink = "/"
  const pongLink = "/pong"
  const snakeLink = "/snake"
  const asteroidsLink = "/asteroids"
  const froggerLink = "/frogger"
  // $TODO
  const loginLink = "/login"
  const highScoreLink = "/highscores"

  const gameTextPong = 'Released in 1972 by Atari, Inc'
  const gameTextSnake = 'Released in 1976 by Gremlin Industries'
  const gameTextAsteroids = 'Released in 1979 by Atari, Inc'
  const gameTextFrogger = 'Released in 1981 by Konami/Sega'

  // #TODO implement use state function/hook
  
  return (
      <div>
        <Header displayButton={true} pLink={loginLink} buttonText="Login"/>
        <GameContainer gameText={gameTextPong} pLink={pongLink} imgSrc={pongSrc} gameTitle={pongTitle} />
        <GameContainer gameText={gameTextSnake} pLink={snakeLink} imgSrc={snakeSrc} gameTitle={snakeTitle}/>
        <GameContainer gameText={gameTextAsteroids} pLink={asteroidsLink} imgSrc={asteroidsSrc} gameTitle={asteroidsTitle}/>
        <GameContainer gameText={gameTextFrogger} pLink={froggerLink} imgSrc={froggerSrc} gameTitle={froggerTitle}/>
        <Button pLink={highScoreLink} buttonText="High Scores" />
        <Footer />
      </div>
  );
}

export default App;
