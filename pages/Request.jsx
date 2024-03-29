import React, {useState,useEffect} from 'react'

export default function Request() {
  const[authors,setAuthors]=useState([])


  async function fetchAuthors(){
    const response = await fetch('http://127.0.0.1:8000/authors/?skip=0&limit=10')
    const authors=await response.json()
    setAuthors(authors)
  }
  useEffect(()=> {
    fetchAuthors()
  },[])


  return (
    <div>
        <ul>
          {authors.map(author => <li key={author.id}>{author.name}, id:{author.id}</li>)}
        </ul>
    </div>
  )
}
