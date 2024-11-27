
import { useInView,motion } from 'motion/react';
import { useRef } from 'react';
import { FaGithubSquare } from 'react-icons/fa'
import { FaGlobe } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Card = ({title,description,img,gitLink,globLink}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
  return (
    <motion.div className="card" 
    ref={ref}
    initial={{ opacity: 0, y: 100 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.9 }}>
          <div className="img_cont">
            <img src={img} alt="photo" />
            <Link to={gitLink} target='_blanck'>
              <FaGithubSquare className="git"/>
            </Link>
          </div>
          <Link className="title" to={globLink} target='_blanck'>
              <h3>{title}<FaGlobe/></h3>
          </Link>
          <div className="txt">
            {description}
          </div>
        </motion.div>
  )
}

export default Card