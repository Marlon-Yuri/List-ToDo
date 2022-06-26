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
        id: Math.floor(Math.random() * 100),
        value: input
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
                    <li>{tarefa.value}
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
