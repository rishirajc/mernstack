import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { UpdateData } from './Api';
import {styled} from "styled-components"
const MAIN=styled.div`
width: 100%;
min-height: 140vh;
background-color: cadetblue;
display: flex;
align-items: center;
justify-content: center;

`


const Update = () => {

  const localstorge=useSelector((state)=>state.login.loginData)
  console.log(localstorge);
  const Id=localstorge?.userid
  

  const[name,setname]=useState()
  const[email,setemail]=useState()
  const[password,setpassword]=useState()
  const[age,setage]=useState()
  const[mobile,setmobile]=useState()
  const[pincode,setpincode]=useState()

  function upbutton(){
    UpdateData(Id,{name,email,password,age,mobile,pincode})

  }
  return (
    <MAIN>

  
    
<input type="text" placeholder='name' onChange={(e)=>setname(e.target.value)}/>
<input type="text" placeholder='email' onChange={(e)=>setemail(e.target.value)}/>
<input type="text" placeholder='password'  onChange={(e)=>setpassword(e.target.value)}/>
<input type="text" placeholder='age'  onChange={(e)=>setage(e.target.value)}/>
<input type="text" placeholder='mobile' onChange={(e)=>setmobile(e.target.value)}/>
<input type="text" placeholder='pincode'  onChange={(e)=>setpincode(e.target.value)}/>


 
    <button onClick={upbutton}>update</button>


  
    
    
    </MAIN>
  )
}

export default Update
