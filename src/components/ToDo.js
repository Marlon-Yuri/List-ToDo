import React, { useEffect, useRef, useState } from 'react'
import * as S from './style'
import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
*{
   margin:0;
   padding:0;
   box-sizing:border-box; 
}
`
export default function ToDo() {
    const [input, setInput] = useState()
    const [task, setTask] = useState([])
    const refInput = useRef()

    useEffect(() =>{
        document.title = `Marlon's ToDo`
        refInput.current.focus()
        if(localStorage.getItem('localTask')){
            setTask(JSON.parse(localStorage.getItem('localTask')))
          }
    } ,[])

const Add=() =>{
    if(!input){
        alert('Adicione uma tarefa')
        return
    }
    let infos = {
        id: Date.now(),
        value: input,
        status: false
    }
    setInput('')
    setTask(oldList => [...oldList , infos])
    localStorage.setItem('localTask', JSON.stringify([...task , infos]))
}
function Delete(id){
    const listDelete = task.filter(tarefa => tarefa.id !== id)
    setTask(listDelete)
    localStorage.setItem('localTask', JSON.stringify(listDelete))
}

function Clean(){
    setTask([])
    localStorage.removeItem('localTask')
}

function isMarked(id){
    const MarkedOption = task.map(item => item.id === id.id ? {...item, status: !id.status} : item )
    setTask(MarkedOption)
}


useEffect(() =>{
console.log('Welcome to My taskList')
},[])
    return (
        <form onSubmit={e => e.preventDefault()}>
        <S.Container>
            <GlobalStyle />
            <S.Todo>
            <S.Box>
             <S.Button onClick={()=>{Add()}}>Add Task</S.Button>
             <S.Input ref={refInput} value={input} onChange={e => setInput(e.target.value)} />
            </S.Box>
            <S.List>
            <ol>
                {task.map(tarefa =>(
                    <li key={tarefa.id} style={{textDecoration : tarefa.status ? 'line-through' :''}}>
                    <input type='checkbox' onClick={() =>{isMarked(tarefa)}}/>   
                    {tarefa.value || ''}
                    <button style={{borderStyle:'none', cursor:'pointer'}} onClick={() =>{Delete(tarefa.id)}}>🗑️</button>
                    </li>
                    
                ))}
            </ol>
            </S.List>
            </S.Todo>
           
        </S.Container>
        <S.BtnClean onClick={()=>{Clean()}}></S.BtnClean>
        </form>
    )
}
