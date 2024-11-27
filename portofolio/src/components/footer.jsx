import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer >
     &copy; 2024  Made with ❤ by <span>
       <Link to={"/"}>
          Elias Yasser
       </Link>
       </span>
    </footer>
  )
}

export default Footer