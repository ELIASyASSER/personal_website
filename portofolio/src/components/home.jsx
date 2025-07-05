import { FaFilePdf } from "react-icons/fa6";
import { motion, useScroll } from "framer-motion";
import { Link } from "react-router-dom";
import { FaDiscord, FaGithub, FaLinkedin, FaPhone, FaWhatsapp } from "react-icons/fa";
import {MdEmail} from "react-icons/md"
import About from "./about";
import Projects from "./projects";

const Home = () => {
  const { scrollYProgress } = useScroll();
  return (
    <main className="main__content">
    <motion.div className="progress__bar " style={{ scaleX: scrollYProgress }}></motion.div>
      <section className="left">
        <div className="info">
                  <h1>Elias Yasser</h1>
                  <p >Full Stack Developer</p>
                  <p>React.js & Node.js</p>
                  <a href={"https://drive.google.com/file/d/1qO4zs1UzFf3hShfXBFs7Io27bYZUpvm_/view"} target="_blank" >
                  <FaFilePdf className="icon" />
                    Resume
                  </a>
        </div>
            <div className="socials">
              <div>
                  <a href={"https://github.com/ELIASyASSER?tab=repositories"} target="_blank">
                      <FaGithub/>
                  </a>
                  <a href={"https://www.linkedin.com/in/elias-yasser/"} target="_blank">
                      <FaLinkedin/>
                  </a>
                  <a href={"tel:+201156048566"} target="_blank">
                      <FaPhone/>
                  </a>
              </div>
              <div>
                    <a to={"https://wa.me/+201156048566"} href="_blank">
                        <FaWhatsapp/>
                    </a>
                    <a  target="_blank" href={"https://discord.gg/KUtu4jsf"}>
                        <FaDiscord/>
                    </a>
                    <a href={"mailto:yasralyas576@gmail.com"} target="_blank">
                        <MdEmail/>
                    </a>
              </div>
            </div>
        
      </section>
      <section className="right">
        <About/>
        <Projects/>
      </section>
    </main>
  )
}

export default Home