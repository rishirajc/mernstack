import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SignupData } from './Api'
import {styled} from  "styled-components"

const DIV=styled.div`
  margin-top: -34px;
  margin-left: 166px;
  cursor: pointer;
  
`
const PIC=styled.div`
  width: 400px;
  height: 200px;
  margin-left: 550px;
  margin-top: 200px;
`

const Signuppage = () => {
  const[name,setname]=useState(String)
  const[email,setemail]=useState(String)
  const[password,setpassword]=useState(String)
  const[age,setage]=useState(Number)
  const[mobile,setmobile]=useState(Number)
  const[pincode,setpincode]=useState(Number)

  function signup(){
    console.log('first check',name,email,mobile,password,age,pincode);
     SignupData({name,email,password,age,mobile,pincode})


  }
  return (
    <div>
    <PIC><img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7l0ql6GGGCSffB_IxNBIHj7jDqUM1e0YDoQ&s" alt="" /></PIC>
      <DIV>
      <input type=" text" placeholder='name' onChange={(e)=>setname(e.target.value)}/>
      <input type=" email" placeholder='email' onChange={(e)=>setemail(e.target.value)}/>
      <input type="password" placeholder='password' onChange={(e)=>setpassword(e.target.value)}/>
      <input type="number" placeholder='age' onChange={(e)=>setage(e.target.value)}/>
      <input type="number" placeholder='mobile' onChange={(e)=>setmobile(e.target.value)}/>
      <input type="number" placeholder='pincode' onChange={(e)=>setpincode(e.target.value)}/>
       <button onClick={signup} style={{backgroundColor:'lightblue'}}>signup</button>
   
<Link to={'/'}><button style={{backgroundColor:'lightblue'}}> login page</button> </Link>
</DIV>

 
    </div>
  )
}

export default Signuppage
