import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter , RouterProvider } from "react-router-dom "
import Layout from './components/Layout'
import Nuevoclientes from './Pages/Nuevoclientes'

import Index  , { loader as clientesLoader } from './Pages/Index'

const router = createBrowserRouter ( [ 
{
path:"/",
element : < Layout />,
children: [
  {
    index : true ,
    element: <Index / > ,
    loader : clientesLoader 

  },

  {
    path: "/clientes/nuevo",
    element: <Nuevoclientes/>
  }
]}])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider    router={ router }    / >

  </React.StrictMode>
)
