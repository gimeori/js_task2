
import './App.css'
import Header from './components/Header'
import BasicMenu from './components/BasicMenu'
import { useState } from 'react'
import Footer from './components/Footer'


export default function App() {
  const[tab,setTab]=useState('content')


  return(
  <div>
    <Header/>
    <main>
    <h2>
      Task#3
    </h2>
    <BasicMenu/> 
    </main>
    
    <Footer/>
  </div>
)
}


