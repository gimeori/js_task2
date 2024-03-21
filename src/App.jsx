import {Header} from './components/Header'
import React from 'react'
import Footer from './components/Footer'
import { ThemeProvider } from './providers/ThemeProvider'
import Navbar from './components/Navbar'
import Content from '../pages/Content'
import Counter from './components/Counter'



export default function App() {

  return(
  <div>
    
    <ThemeProvider >
    <Navbar/>
    <Header/>
    <Content/>
    <Counter/>
    </ThemeProvider>
    <Footer/>
    
  </div>
)
}