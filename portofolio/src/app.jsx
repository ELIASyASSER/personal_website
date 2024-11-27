import Footer from "./components/footer"
import Header from "./components/header"
import "./styles/main.scss"
import {Outlet} from "react-router-dom"
const App = () => {
  return (
    <main className="whole__app">
        <Header/>
        <Outlet/>
        <Footer/>
    </main>
  )
}

export default App