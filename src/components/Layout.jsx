
import {  Outlet  } from "react-router-dom "

function Layout() {
  return (
    <div  className=" ">
    <h1  className="text-6xl  font-bold " > Desde Layout</h1>

   < Outlet />


    </div>


  )
}

export default Layout