import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Portfolio from './components/Portfolio/Portfolio'
import Home from './components/Home/Home'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import {createBrowserRouter, RouterProvider,} from "react-router-dom"
import NotFound from './components/NotFound/NotFound'
import Layout from './components/Layout/Layout'

let routers = createBrowserRouter([
  {path:'/',element:<Layout/>,children:[
  {index:true,element:<Home/>},
  {path:"about",element:<About/>},
  {path:"portfolio",element:<Portfolio/>},
  {path:"contact",element:<Contact/>},
  {path:"*",element:<NotFound/>},
  ]}
])
function App() {
  

  return (
     <>

  <RouterProvider router={routers}>

  </RouterProvider>
     </>
  )
}

export default App
