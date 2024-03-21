import React from 'react'
import Login from '../pages/Login'
import About from '../pages/About'
import { Routes,Route } from 'react-router-dom'
import BasicMenu from '../pages/BasicMenu'

export default function Content() {
    
  return (
    <div>
    <Routes>
    <Route path="/" element={<BasicMenu/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/login" element={<Login/>}/>
    </Routes>
    </div>
  )
}
