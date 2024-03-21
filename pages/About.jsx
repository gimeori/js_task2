import React from 'react'

export default function About() {
    const[count,setCount]=React.useState(0);
    React.useEffect(() =>{
      document.title=`вы нажали ${count} раз`;
    });
  return (
    <div>
        <p>Вы нажали {count} раз</p>
        <button onClick={() => setCount(count+1)}>нажми</button>
      </div>
  )
}
