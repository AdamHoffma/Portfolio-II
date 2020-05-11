import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
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
          <img src="client\Profile_Pic_For_Work (2).jpg" className="intro-pic"></img>
          <h1>Adam Hoffman's Full Stack Web Development Portfolio</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
