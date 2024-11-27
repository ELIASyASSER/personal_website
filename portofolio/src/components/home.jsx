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
                  <Link>
                  <FaFilePdf className="icon" />
                    Resume
                  </Link>
        </div>
            <div className="socials">
              <div>
                  <Link to={"https://github.com/ELIASyASSER?tab=repositories"} target="_blanck">
                      <FaGithub/>
                  </Link>
                  <Link to={"https://www.linkedin.com/in/elias-yasser-8a63a1216/"} target="_blanck">
                      <FaLinkedin/>
                  </Link>
                  <Link>
                      <FaPhone/>
                  </Link>
              </div>
              <div>
                    <Link>
                        <FaWhatsapp/>
                    </Link>
                    <Link  target="_blanck" to={"https://discord.gg/KUtu4jsf"}>
                        <FaDiscord/>
                    </Link>
                    <Link to={"mailto:yasralyas576@gmail.com"} target="_blanck">
                        <MdEmail/>
                    </Link>
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