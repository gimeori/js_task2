import Button from './Button'


export default function TabsSection({active, onChange}){
    return(
        <section>
        <Button isActive={active=='main'} onClick={()=> onChange('main')}>Главная</Button>
        <Button isActive={active=='content'} onClick={()=> onChange('content')}>Содержание</Button>
        </section>
    )
}