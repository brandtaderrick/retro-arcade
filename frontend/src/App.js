import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import GameContainer from './components/GameContainer';
import pongSrc from "./assets/Images/Pong.png"
import froggerSrc from "./assets/Images/Frogger.jpg"
import asteroidsSrc from "./assets/Images/Asteroids.jpg"


function App() {

  const[pongLogo, setPongLogo] = useState("../assets/Images/Pong.png")
  const pongTitle = "Pong"
  const froggerTitle = "Frogger"
  const asteroidsTitle = "Asteroids"
  return (
    <div>
      <Header />
      <GameContainer imgSrc={pongSrc} gameTitle={pongTitle} />
      <GameContainer imgSrc={froggerSrc} gameTitle={froggerTitle}/>
      <GameContainer imgSrc={asteroidsSrc} gameTitle={asteroidsTitle}/>
    </div>
  );
}

export default App;
