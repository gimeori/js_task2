import React,{useContext,useEffect, useState} from 'react'
import { ThemeContext } from '../providers/ThemeProvider'



export const Header=() =>{
  const[theme,setTheme]=useContext(ThemeContext);
  const changeTheme=() => {
    setTheme(theme==="light" ? "dark" : "light")
  }
  const [now,setNow]=React.useState(new Date())
  setInterval(() => setNow(new Date()),1000)
    return(
      
      <div className="header" >
        
        <button style={{float: 'left'}} onClick={changeTheme}>Theme</button>
        <span style={{float: 'right'}}>Время сейчас: {now. toLocaleTimeString()}</span>
        
      </div>
    )
  }