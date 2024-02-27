import Button from './Button'
import { useState } from 'react'
import { differences } from '../data'

export default function ButtonSection(){
    const [phrase,setPhrase]=useState('нажмите на кнопку')
    function handleClick(type){
    setPhrase(type)
}
    return(
    <section>
    <Button onClick={()=> handleClick('menu')}>Меню</Button>
    <Button onClick={()=> handleClick('about')}>О нас</Button>
    <Button onClick={()=> handleClick('reviews')}>Отзывы</Button>
    <Button onClick={()=> handleClick('times')}>Показать время </Button>
    <p>{differences[phrase]}</p>
    </section>
    )
}