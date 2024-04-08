import React from 'react'
import Login from '../pages/Login'
import About from '../pages/About'
import Authors from './Authors'
import { Routes,Route } from 'react-router-dom'
import TempDrawer from '../src/components/Drawer'

export default function Content() {
    
  return (
    <div>
    <Routes>
    <Route path="/" element={<TempDrawer/>}/>
    <Route path="/authors" element={<Authors/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/login" element={<Login/>}/>
    </Routes>
    </div>
  )
}
