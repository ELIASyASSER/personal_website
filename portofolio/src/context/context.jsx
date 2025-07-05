import { createContext, useRef } from "react"

export const contextRefs = createContext()

export const ContextProvider = ({children})=>{
    const aboutRef = useRef(null)
    const projectsRef = useRef(null)

    const value ={
        aboutRef,
        projectsRef
    }
    return <contextRefs.Provider value={value}>
        {children}
    </contextRefs.Provider>
}