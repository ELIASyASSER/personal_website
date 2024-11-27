//icons
import  html from  "../assets/html-5-svgrepo-com.svg" 
import  css from  "../assets/css-3-svgrepo-com.svg" 
import  js from  "../assets/javascript-svgrepo-com.svg" 
import  react from  "../assets/react-1-logo-svgrepo-com.svg" 
import mongo from "../assets/mongodb-svgrepo-com.svg"
import express from "../assets/express-svgrepo-com.svg"
import postgre from "../assets/pgsql-svgrepo-com.svg"
import sass from "../assets/sass-svgrepo-com.svg"
import git from "../assets/github-svgrepo-com.svg"
import tailwind from "../assets/tailwind-svgrepo-com.svg"
import pug from "../assets/pug-svgrepo-com.svg"
import c from "../assets/c-plus-plus-svgrepo-com.svg"



import { useContext } from "react"
import { contextRefs } from "../context/context"

const About = () => {
  const {aboutRef} = useContext(contextRefs)
  
  
// Greetings! I'm Elias Yasser, a passionate MERN stack developer dedicated to crafting responsive, user-focused web applications. With a strong foundation in HTML, CSS, JavaScript, and advanced styling using Tailwind CSS and Sass, I bring designs to life with precision and elegance. My expertise extends to React for dynamic UIs and Express.js for robust backends, supported by MongoDB and PostgreSQL for efficient data handling. Proficient in Git and GitHub for version control and collaborative development, I also leverage Pug to streamline templating for clean, maintainable code. Additionally, I have a solid understanding of C++ basics, enhancing my problem-solving approach and logic. I continuously sharpen my skills to stay ahead in the ever-evolving tech landscape. Let's build something amazing together! 🚀
  return (
    <section className="about__page" ref={aboutRef}>
      <h2>About <span className="red-c">Me</span></h2>
      <p>Greetings! I'm <span className="red-c">ELias Yasser</span>, a passionate of full-stack development dedicated to crafting responsive, user-focused web .With Good Foundation Using <span className="red-c"> HTML, CSS</span>, and <span className="red-c">JavaScript</span>. and advanced styling using <span className="red-c">Tailwind CSS</span> and <span className="red-c">Sass</span>, I bring designs to life with precision and elegance
      I  Use <span className="red-c">React</span> Framework for dynamic UIs and <span className="red-c">Express.js</span> for  backend, supported by <span className="red-c">MongoDB</span> and  <span className="red-c">PostgreSQL</span>  for efficient data handling.I use <span className="red-c">Git and GitHub</span>  for version control and collaborative development, and 
      to enhance my problem-solving approach and logic i solve problems with <span className="red-c"> C++ </span> Now I prepare <span className="red-c">Data structures & Algorithms</span> to solve more 
      advanced and complicated questions
      finally I continuously sharpen my skills to stay ahead in the ever-evolving tech landscape. Let's build something amazing together!
      </p>
      <div className="skills">
        <h3>Techs</h3>

        <div className="icons__skills">
            <img src={c} alt="Logo"  />
            <img src={html} alt="Logo" />
            <img src={css} alt="Logo" />
            <img src={js} alt="Logo" />
            <img src={react} alt="Logo" />
            <img src={mongo} alt="Logo" />
            <img src={postgre} alt="Logo" />
            <img src={express} alt="Logo" />
            <img src={git} alt="Logo" />
            <img src={sass} alt="Logo" />
            <img src={tailwind} alt="Logo" />
            <img src={pug} alt="Logo" />
          

        </div>


      </div>
    </section>
  )
}

export default About