import React from 'react';
import logo from './logo.svg';
import './App.css';
import Image from "./Image.jpg"
import ReactIcon from "./ReactIcon.png"
import NodeJSIcon from "./NodeJS.jpg"
import PythonIcon from "./Python.jpg"
import Html from "./Html5.png"
import Css3 from "./CSS3.png"
import Javacript from "./Javascript.jpg"
import Express from "./Express.png"
import SQlite from "./SQlite.jpg"
import Heroku from "./Heroku.jpg"
import Github from "./Github.png"
import Git from "./Git.png"
import Baseball from "./BaseBallPage.png"
import Socket from "./Socket.jpg"
import Design from "./Design.png"

function App() {  
  const popUp = () => {
    var popup = document.getElementById("myPopup")
    popup.classList.toggle("show")
  }

  const popUp2 = () => {
    var popup2 = document.getElementById("myPopup2")
    popup2.classList.toggle("show")
  }

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
              <a href="#About" className="arrow right">Learn More</a>
            </div>
        </div>
        <div className="About" id="About">
          <div className="about_box">
            <h2>About Me</h2>
            <p className="about-paragraph">Hi, my name is Adam Hoffman and I am currently a student at Lambda University. I am studying Full Stack Web Development. Prior to being a student at Lambda I ran a successful home remodeling business with my father. I've decided to branch out and learn a new skill set and I've learned so much at Lambda. From the begginnings of HTML and CSS and on into React for front end work and Node.JS for back end work. Check out all the skills I've acquired!</p>
          </div>
          <div className="skills">
            <h2>Skills and Technologies</h2>
            <img className="skill_icon" src={ReactIcon}></img>
            <img className="skill_icon" src={NodeJSIcon}></img>
            <img className="skill_icon" src={PythonIcon}></img>
            <img className="skill_icon" src={Html}></img>
            <img className="skill_icon" src={Css3}></img>
            <img className="skill_icon" src={Javacript}></img>
            <img className="skill_icon" src={Express}></img>
            <img className="skill_icon" src={SQlite}></img>
            <img className="skill_icon" src={Heroku}></img>
            <img className="skill_icon" src={Github}></img>
            <img className="skill_icon" src={Git}></img>
            <img className="skill_icon" src={Socket}></img>
          </div>
        </div>
        
        <div className="projects" id="Projects">
          <h2 className="projects-header">Projects I'm proud of</h2>
          <div className="project-container">
            <div className="project1">
              <img className="project-image" src={Baseball}></img>
              <h3>Baseball Game Predictor</h3>
              <h4>React || Redux || Node.JS || Knex || SQlite</h4>
              <p>A website built for the purpose of predicting the winner of every baseball game.</p>
              <div className="more-boxes">
                <a href="https://github.com/AdamHoffma/baseball-game-prediction-be"><img className="git-icon" src={Github}></img></a>
              </div>
              <div className="more-boxes">
                <a href="http://www.baseballgamepredictor.com/"><p>Visit The Site!</p></a>
              </div>
              <div className="popup" onClick={popUp}>Learn More...
                <span className="popuptext" id="myPopup">
                  <h5>About this project:</h5>
                  <p>Working with data scientists our groups goal was to create a website that predicted the winners of every MLB game. Our goal was to reach an accuracy above 50%, we achieved 54% by testing our model against previously played games. </p>
                  <h5>My Role:</h5>
                  <p>I built the back end routes and database to store data used to create the prediction model. The back end was built using Node.js, SQlite, and Knex. I was also in charge of the personalization of the front end, creating a profile page that was personalized and pleasing. The front end was created using React and Redux. API calls were done via Axios.</p>
                </span>
              </div>
            </div>
            <div className="project1">
              <img className="project-image" src={Design}></img>
              <h3>Design Your Life</h3>
              <h4>Node.JS || Knex || SQlite</h4>
              <p>A beautiful website built to create better habits in you day to day life</p>
              <div className="more-boxes">
                <a href="https://github.com/Design-Your-Life-Build-Week/Back-End"><img className="git-icon" src={Github}></img></a>
              </div>
              <div className="more-boxes">
                <a href="https://designyourlife.now.sh/"><p>Visit The Site!</p></a>
              </div>
              <div className="popup" onClick={popUp2}>Learn More...
                <span className="popuptext" id="myPopup2">
                  <h5>About this project:</h5>
                  <p></p>
                  <h5>My Role:</h5>
                  <p>I was fully in charge of creating the back end for this project. I created the registration and login functionality using Bcrypt and JsonWebTokens. I created the databases for storing a users categories and habits and notes on those habits. I used Knex, Node.JS and Sqlite. I also built all back end routes</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="projects" id="Projects">
         
        </div>
      </div>
    </div>
  );
}

export default App;
