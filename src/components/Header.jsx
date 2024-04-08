import React,{useContext} from 'react'



export const Header=() =>{
  const [now,setNow]=React.useState(new Date())
  setInterval(() => setNow(new Date()),1000)
    return(
      
      <div className="header" >
        <span style={{float: 'right'}}>Время сейчас: {now. toLocaleTimeString()}</span>
      </div>
    )
  }