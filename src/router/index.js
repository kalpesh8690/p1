import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import TV from "../pages/TVPlayer";
import Resume from "../pages/Resume/Resume";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Home/>,
        errorElement:<ErrorPage/>
    },
    {
        path:'/tv',
        element:<TV/>,
        errorElement:<ErrorPage/>
    },
    {
        path:'/resume',
        element:<Resume/>,
        errorElement:<ErrorPage/>
    }
])

export default router