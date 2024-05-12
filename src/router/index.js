import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/Error/Error";
import Home from "../pages/Home/Home";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Home/>,
        errorElement:<ErrorPage/>
    }
])

export default router