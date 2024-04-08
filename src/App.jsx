import { Header } from './components/Header'
import React from 'react'
import { Footer } from './components/Footer'
import { ThemeProvider } from './providers/ThemeProvider'
import Navbar from './components/Navbar'
import Content from '../pages/Content'
import Slider from '../src/components/Slider'
import Drawer from './components/Drawer'



export default function App() {

  return (
    <div className='page-container'>
      <div className='content-wrap'>

        <ThemeProvider >
          <Navbar />
          <Header />
          <Content />
          <Slider />
        </ThemeProvider>
      </div>
      <Footer />

    </div>
  )
}