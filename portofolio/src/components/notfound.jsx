import { Link } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <section className="notFound__page">
      <h1>Oops Error 404 <br />
      This Page Not Found
      </h1>
      <Link to={"/"}>Back Home </Link>
    </section>
  )
}

export default NotFoundPage