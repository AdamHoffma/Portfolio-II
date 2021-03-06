import React from 'react';
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
import Chat from "./ChatApp.png"
import Linked from "./linkedin.jpg"
import Resume from "./ResumeImage.jpg"

function App() {  
  const popUp = () => {
    var popup = document.getElementById("myPopup")
    popup.classList.toggle("show")
  }

  const popUp2 = () => {
    var popup2 = document.getElementById("myPopup2")
    popup2.classList.toggle("show2")
  }

  const popUp3 = () => {
    var popup3 = document.getElementById("myPopup3")
    popup3.classList.toggle("show3")
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
              <img alt="Profile" src={Image} className="intro-pic"></img>
            </div>
            <div className="h1-container">
              <h1 className="h1">Adam Hoffman</h1>
              <h3 className="full-stack">Full Stack Web Developer</h3>
              <h3 className="full-stack-skills">React || Javascript || Python</h3>
              <h3 className="full-stack-skills">HTML5 || CSS</h3>
              <h3 className="full-stack-skills">Express || Node.JS || SQLite</h3>              
              <h3 className="full-stack-skills">Socket.Io || Heroku || GitHub</h3>                           
            </div>
        </div>
        <div className="projects" id="Projects">
          <h2 className="projects-header">Projects I'm proud of</h2>
          <div className="project-container">
            <div className="project1">
              <img alt="Baseball website screenshot" className="project-image" src={Baseball}></img>
              <h3 className="project-title">Baseball Game Predictor</h3>
              <h4 className="project-skills">React || Redux || Node.JS || Knex || SQlite</h4>
              <p className="project-description">A website built for the purpose of predicting the winner of every baseball game.</p>
              <div className="more-boxes">
                <a href="https://github.com/AdamHoffma/baseball-game-prediction-be"><img alt="github icon" className="git-icon" src={Github}></img></a>
              </div>
              <div className="more-boxes">
                <a className="visit" href="http://www.baseballgamepredictor.com/login"><p>Visit The Site!</p></a>
              </div>
              <div className="popup" onClick={popUp}>Learn More...
                <span className="popuptext" id="myPopup">
                  <h5 className="project-description">About this project:</h5>
                  <p className="project-description">Working with data scientists our groups goal was to create a website that predicted the winners of every MLB game. Our goal was to reach an accuracy above 50%, we achieved 54% by testing our model against previously played games. </p>
                  <h5 className="project-description">My Role:</h5>
                  <p className="project-description">I built the back end routes and database to store data used to create the prediction model. The back end was built using Node.js, SQlite, and Knex. I was also in charge of the personalization of the front end, creating a profile page that was personalized and pleasing. The front end was created using React and Redux. API calls were done via Axios.</p>
                </span>
              </div>
            </div>
            <div className="project1">
              <img alt="Design you life website screenshot" className="project-image" src={Design}></img>
              <h3 className="project-title">Design Your Life</h3>
              <h4 className="project-title">Node.JS || Knex || SQlite</h4>
              <p className="project-title">A beautiful website built to create better habits in your day to day life</p>
              <div className="more-boxes">
                <a href="https://github.com/Design-Your-Life-Build-Week/Back-End"><img alt="github icon" className="git-icon" src={Github}></img></a>
              </div>
              <div className="more-boxes">
                <a className="visit" href="https://designyourlife.now.sh/"><p>Visit The Site!</p></a>
              </div>
              <div className="popup2" onClick={popUp2}>Learn More...
                <span className="popuptext2" id="myPopup2">
                  <h5 className="project-title">About this project:</h5>
                  <p className="project-title">This is a website designed for user to create a one stop page for the habits they would like to create in their life. They can select different categories to place habits under, leave themselves notes on that habit like time of day, reason for the habit or just feedback on how it's going. We also built a 5 star ranking system so the user could rank their enjoyment of that particular habit.</p>
                  <h5 className="project-title">My Role:</h5>
                  <p className="project-title">I was fully in charge of creating the back end for this project. I created the registration and login functionality using Bcrypt and JsonWebTokens. I created the databases for storing a users categories and habits and notes on those habits. I used Knex, Node.JS and Sqlite. I also built all back end routes</p>
                </span>
              </div>
            </div>
            <div className="project1">
              <img alt="Chatroom website icon" className="project-image" src={Chat}></img>
              <h3 className="project-title">Chat App</h3>
              <h4 className="project-title">Node.JS || React || Socket.Io</h4>
              <p className="project-title">Ready to join chatrooms</p>
              <div className="more-boxes">
                <a href="https://github.com/AdamHoffma/ReactChatApp"><img alt="github icon" className="git-icon" src={Github}></img></a>
              </div>
              <div className="more-boxes">
                <a className="visit" href="https://adamchatroom.netlify.app/"><p>Visit The Site!</p></a>
              </div>
              <div className="popup3" onClick={popUp3}>Learn More...
                <span className="popuptext3" id="myPopup3">
                  <h5 className="project-title">About this project:</h5>
                  <p className="project-title">This is a fairly basic chat room app. You enter your name and a room name and it will create a private chatroom. It was built using Node.JS, React and Socket.Io. The primary function of this app was to learn the ins and outs of socket.Io so that I could bring chat features into any app or website I create.</p>
                  <h5 className="project-title">My Role:</h5>
                  <p className="project-title">I built this project on my own, it is all my work. I used a youtube tutorial as a guide and the Socket.Io documentation.</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="About" id="About">
          <div className="about_box">
            <h2 className="about-header">About Me</h2>
            <p className="about-paragraph">Hi, my name is Adam Hoffman and I am currently a student at Lambda University. 
              I am studying Full Stack Web Development. Prior to being a student at Lambda I ran a successful home remodeling business with my father. 
              I've decided to branch out and learn a new skill set and I've learned so much at Lambda. 
              From the beginnings of HTML and CSS and on into React for front end work and Node.JS for back end work. Check out all the skills I've acquired!</p>
          </div>
          <div className="skills">
            <h2 className="skills-text">Skills and Technologies</h2>
            <img alt="React Icon" className="skill_icon" src={ReactIcon}></img>
            <img alt="Node.JS Icon" className="skill_icon" src={NodeJSIcon}></img>
            <img alt="Python Icon" className="skill_icon" src={PythonIcon}></img>
            <img alt="Html icon" className="skill_icon" src={Html}></img>
            <img alt="CSS Icon" className="skill_icon" src={Css3}></img>
            <img alt="Javascript icon" className="skill_icon" src={Javacript}></img>
            <img alt="Express Icon" className="skill_icon" src={Express}></img>
            <img alt="SQlite icon" className="skill_icon" src={SQlite}></img>
            <img alt="Heroku icon" className="skill_icon" src={Heroku}></img>
            <img alt ="gitbug icon" className="skill_icon" src={Github}></img>
            <img alt="Git icon" className="skill_icon" src={Git}></img>
            <img alt ="socketIO icon" className="skill_icon" src={Socket}></img>
          </div>
        </div>           
        <div className="contact" id="Contact">
          <h1 className="contact-header">Contact Me</h1>
          <div className="email">
            <a className="mailto" href="mailto:wintros@yahoo.com"><h2 className='email-header'>wintros@yahoo.com</h2></a>
          </div>
          <div className="artifacts">
            <a className="artifact-font" href="https://www.linkedin.com/in/adam-hoffman-93ba371a7/" target="_blank"><h3>LinkedIn</h3></a>
            <a className="artifact-font" href="https://github.com/AdamHoffma" target="_blank"><h3>Github</h3></a>
            <a className="artifact-font" href="https://www.dropbox.com/s/923svs7ffljfyh9/Adam%20Hoffman%20Full%20Stack%20Developer%20Resume.PDF?dl=0" target="_blank"><h3>Resume</h3></a>
            <a href="https://www.linkedin.com/in/adam-hoffman-93ba371a7/" target="_blank"><img alt="Linked In icon" className="artifact-image" src={Linked}></img></a>
            <a href="https://github.com/AdamHoffma" target="_blank"><img alt="github icon" className="artifact-image1" src={Github}></img></a>
            <a href="https://www.dropbox.com/s/923svs7ffljfyh9/Adam%20Hoffman%20Full%20Stack%20Developer%20Resume.PDF?dl=0" target="_blank"><img alt="resume icon" className="artifact-image" src={Resume}></img></a>
          </div>
        </div>        
      </div>
    </div>
  );
}

export default App;
