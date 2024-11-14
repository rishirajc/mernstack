import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import { Link } from 'react-router-dom'
import { LogData } from './Api'
import {styled} from  "styled-components"

const BODY=styled.div`
  width: 100%;
  height: 30px;
  margin-top: 12px;
  margin-left: 514px;
`
const Imag=styled.div`
  margin-top: 300px;
  margin-left:510px;

  
`


const Loginpage = () => {
   const dispatch=useDispatch()
  
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')

  function login(){
    console.log('first check',email,password);
    
    LogData({email,password},dispatch)

    
}
  return (
    <div>
      <Imag>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7l0ql6GGGCSffB_IxNBIHj7jDqUM1e0YDoQ&s" alt=""/>

      </Imag>

    <BODY>


      <input type="text" placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
      <input type="text" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
       <button onClick={login} style={{backgroundColor:'green'}}>login</button>
      <Link to={'/signup'}> <h5>CREATE AN ACCOUNT?</h5></Link>

    </BODY>
    </div>
  )
}

export default Loginpage
