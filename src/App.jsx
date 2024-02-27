
import './App.css'
import Header from './components/Header'
import ButtonSection from './components/ButtonSection'
import TabsSection from './components/TabsSection'
import { useState } from 'react'
import ContentSection from './components/ContentSection'

export default function App() {
  const[tab,setTab]=useState('content')


return(
  <div>
    <Header/>
    <main>
    <h1>
      Task#2
    </h1>
    <TabsSection active={tab} onChange={(current)=> setTab(current)} /> 
    {tab=='main' && (
      <>
      <ButtonSection/> 
      </>
    )}
    {tab=='content' && <ContentSection/>}
  

    </main>
  </div>
)
}


