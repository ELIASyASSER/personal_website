import { createBrowserRouter } from "react-router-dom";
import App from "../app";
import Home from "../components/home";
import Projects from "../components/projects";
import About from "../components/about";
import NotFoundPage from "../components/notfound";
const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"*",
                element:<NotFoundPage/>
            }
            
        ]
    }
])
export default  router