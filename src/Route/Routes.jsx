import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import Skill from "../Pages/Skill/Skill";
import Projects from "../Pages/Projects/Projects";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        
        {
          path: '/',
          element: <Home></Home>
        },
        {
            path:'/contact',
            element:<Contact></Contact>
        },
        {
            path:'/about',
            element:<About></About>
        },
        {
          path:'/skill',
          element:<Skill></Skill>
        },
        {
          path:'/project',
          element:<Projects></Projects>
        }
    ]
    },
   
    
  ]);
  export default router;