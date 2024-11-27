import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { contextRefs } from "../context/context";

const Header = () => {

  const {aboutRef,projectsRef} = useContext(contextRefs)
  const [openMenu, setOpenMenu] = useState(false);

  // Close the menu if the window is resized above 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpenMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const scrollIntoSection = (ref)=>{
    ref.current.scrollIntoView({behavior:"smooth"})
  }
  // Define animation variants
  const menuVariants = {
    hidden: { x: "-20%" }, // Start off-screen to the right
    visible: { 
      x: 0, 
      opacity: 1, 
      transition: { type: "tween", duration: 0.6 } 
    },
    exit: { 
      x: "-10%", 
      opacity: 0, 
      transition: { type: "tween", duration: 0.6 } 
    }
  };

  return (
    <header className="header">
      <h1>EL<span>IA</span>S</h1>
      <nav>
        <GiHamburgerMenu className="burger" onClick={() => setOpenMenu((prev) => !prev)} />
        
        {/* Use motion.ul with variants */}
        <motion.ul
          className={`links ${openMenu ? 'sidebar' : ''}`}
          initial="hidden"
          animate={openMenu ? "visible" : "hidden"}
          exit="exit"
          variants={menuVariants}
        >
          <span className="close">
            <FaTimes className="times" onClick={() => setOpenMenu(false)} />
          </span>
          <li><Link to={'/'} onClick={() => setOpenMenu(false)}>Home</Link></li>
          <li><Link  onClick={() => {setOpenMenu(false)
            scrollIntoSection(aboutRef)
          }}>About</Link></li>

          <li><Link  onClick={() => {
            setOpenMenu(false)
            scrollIntoSection(projectsRef)
          }}>Projects</Link></li>
        </motion.ul>
      </nav>
    </header>
  );
};

export default Header;
