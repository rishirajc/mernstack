import React from 'react'
import { useDispatch } from 'react-redux'
import { removedata } from '../assets/redux/Loginslice'
import { Link } from 'react-router-dom'
import {styled} from   "styled-components"

const Title=styled.h3`
  font-size: 19px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: #000000;
    cursor: pointer;
`
const Nav=styled.div`
 width: 100%;
 height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: rebeccapurple;
`


const Nevbar = () => {
    const dispatch=useDispatch()
    function display(){
      
        dispatch(removedata())

    }
  return (
<Nav>

<Link to={'/profile3'}><Title>profile </Title></Link> 
<Title>cart </Title>
<Title>about </Title>
<Title onClick={display}>logout </Title>
    </Nav>

  )
}

export default Nevbar
