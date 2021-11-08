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
  
  return (
      <div>
        <Header buttonText="Login"/>
        <GameContainer imgSrc={pongSrc} gameTitle={pongTitle} />
        <GameContainer imgSrc={froggerSrc} gameTitle={froggerTitle}/>
        <GameContainer imgSrc={asteroidsSrc} gameTitle={asteroidsTitle}/>
        <Button buttonText="High Scores" />
        <Footer />
        <Link to="/signup">Link</Link>
      </div>
  );
}

export default App;
