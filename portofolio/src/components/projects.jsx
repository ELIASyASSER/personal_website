import { contextRefs } from "../context/context"
import Card from "./projectCard"
import { useContext, useEffect, useState } from "react"

const Projects = () => {
  const [info,setInfo] = useState(null)
  const {projectsRef} = useContext(contextRefs)
  useEffect(() => {
      fetch("data.json")
      .then((data)=>data.json())
      .then((info)=>setInfo(info))
  }, [])
  return (
    <section ref={projectsRef} className="projects">
      <h2>projects</h2>
      <div    className="cards">
      {
      info?.map((item)=>(
        <Card key={item.id} {...item}/>
      ))  
      
      }
      </div>
    </section>
  )
}

export default Projects