import styled from 'styled-components'
import Back from '../imgs/back.jpg'
import Clean from '../imgs/clean.png'

export const Container = styled.section`
 width: 100vw;
 height: 100vh;
 background-image: url(${Back});
 background-size:cover;
`
export const Todo = styled.section`
width: 30vw;
position: absolute;
left:58%;
top:30%;
`
export const Box = styled.div`
display: flex;
justify-content:space-evenly;
`
export const List = styled.div`
display: flex;
justify-content:space-evenly;
font-family: 'Anton', sans-serif;
font-size:1.6vw;
margin-top:13%;
`
export const Input = styled.input`
width:20vw;
height:4.7vh;
font-family: 'Anton', sans-serif;
font-size:2vw;
`
export const Button = styled.button`
background-color: aquamarine;
width: 6vw;
border-radius: 15%;
cursor:pointer;
font-size: 1.2vw;
font-family: 'Anton', sans-serif;
`
export const BtnClean = styled.button`
height:7vh;
width:4vw;
background-image: url(${Clean});
background-size:cover;
position:absolute;
left:54%;
top:10%;
border-style:none;
cursor:pointer;
`