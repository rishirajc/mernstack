import {createBrowserRouter,createRoutesFromElements,RouterProvider} from  "react-router-dom"
import Loginpage from "./Loginpage"
import Signuppage from "./Signuppage"
import Profilepage from "./Profilepage"
import { useSelector } from "react-redux"
import Homepage from "./Homepage"
import Update from "./Update"

function app(){

  const logdata=useSelector((state)=>state.login.loginData)
  console.log('login data',logdata);
  if(logdata){
    var tokendata=logdata.jswtoken
  }
  console.log(tokendata);
  

  
const router=createBrowserRouter([
    {
      path:'/',
      element:tokendata? <Homepage/> :<Loginpage></Loginpage>
    },
    {
      path:'/signup',
      element: <Signuppage/>
    },
    {
      path:'/profile3',
      element:tokendata?  <Profilepage/>:<Loginpage/>
    },
     {
path:'/update',
element:tokendata? <Update></Update>:<Loginpage/>
    }

  ])
  return(<RouterProvider router={router}></RouterProvider>

  ) 
}
export default app