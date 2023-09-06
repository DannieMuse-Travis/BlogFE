import{createBrowserRouter} from "react-router-dom"
import Layout from "../components/layOut/Layout"
import HomeScreen from "../pages/HomeScreen"
import SignIn from "../pages/auth/SignIn"

export const mainRoute = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<HomeScreen/>,
            },{
                path:"/signIn",
                element:<SignIn/>
            }
        ]
    }
])