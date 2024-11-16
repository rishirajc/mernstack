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
  margin-left:550px;

  
`
const EMAL=styled.div`
  flex-direction: column;
  margin-left: 127px;
  
 
`
const PSWD=styled.div`
 flex-direction: column;  
 margin-left: 127px;
 margin-top: 20px;
`
const MAIN=styled.div`
  background-color: lightblue;
  width: 100%;
  min-height: 145vh;
margin-top: -294px;
display: flex;
align-items: center;
justify-content: space-between;
`
const LOGN=styled.div`
margin-left: 198px;
margin-top: 10px;
  
`
const CACCNT=styled.div`
 margin-left: 123px;
 margin-top: 12px;

  
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
    <MAIN>
      <div>

     
      <Imag>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7l0ql6GGGCSffB_IxNBIHj7jDqUM1e0YDoQ&s" alt=""/>

      </Imag>

    <BODY>

<EMAL>
<input type="text" placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>


</EMAL>
<PSWD>
<input type="text" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>


</PSWD>
<LOGN>
<button onClick={login} style={{backgroundColor:'green'}}>login</button>


</LOGN>
<CACCNT>
<Link to={'/signup'}> <h5>CREATE AN ACCOUNT?</h5></Link>


</CACCNT>

    </BODY>
 
    </div>
    </MAIN>
  )
}

export default Loginpage
