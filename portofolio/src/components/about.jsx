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
  return (
    <section className="about__page" ref={aboutRef}>
      <h2>About <span className="red-c">Me</span></h2>
      <p>Greetings! I'm <span className="red-c">ELias Yasser</span>, a dedicated frontend developer driven by my love for crafting fully responsive and user-centric websites. My expertise lies in frontend technologies, including <span className="red-c"> HTML, CSS</span>, and <span className="red-c">JavaScript</span>. Currently, I'm deeply engaged with <span className="red-c">React, Next.js</span> , and <span className="red-c">TypeScript</span>, pushing the boundaries of what can be achieved. I maintain a perpetual commitment to honing my skills and keeping pace with the ever-evolving landscape of industry trends.</p>
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