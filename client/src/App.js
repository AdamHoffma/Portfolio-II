import React from 'react';
import logo from './logo.svg';
import './App.css';
import Image from "./Image.jpg"

function App() {
  console.log(Image)
  return (
    <div className="App">
      <div className="menu-box">
        <nav className="nav-box">
          <a href="#About" className="anchor">About</a>
          <a href="#Projects" className="anchor">Projects</a>
          <a href="#Contact" className="anchor">Contact</a>
        </nav>
      </div>
      <div className="intro">
        <div className="intro-box">
            <div className="image-container">
              <img src={Image} className="intro-pic"></img>
            </div>
            <div className="h1-container">
              <h1 className="h1">Adam Hoffman's Full Stack Web Development Portfolio</h1>
              <p>Learn More<a href="#About" className="arrow right"></a></p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
