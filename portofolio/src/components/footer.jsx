import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer >
     &copy;{new Date().getFullYear()}  Made with ❤ by <span>
       <Link to={"/"}>
          Elias Yasser
       </Link>
       </span>
    </footer>
  )
}

export default Footer