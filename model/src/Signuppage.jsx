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
const PIC2=styled.img`
margin-top: 509px;
`

const CLR=styled.div`
  background-color: cadetblue;
  min-height: 145vh;
  margin-top: -200px;
`
const MAIN=styled.div`
  min-height: 145vh;
`
const NAME=styled.div`
flex-direction: column;
margin-left: 474px;
  
`
const EMAIL=styled.div`
  flex-direction: column;
  margin-left: 474px;
  margin-top: 13px;

`
const PSWD=styled.div`
  flex-direction: column;
  margin-left: 474px;
  margin-top: 13px;
`
const AGE=styled.div`
  flex-direction: column;
  margin-left: 474px;
  margin-top: 13px;
`
const MOBILE=styled.div`
  flex-direction: column;
  margin-left: 474px;
  margin-top: 13px;
`
const PINCODE=styled.div`
  flex-direction: column;
  margin-left: 474px;
  margin-top: 13px;
`
const SIGN=styled.div`
  margin-left: 533px;
  margin-top: 13px;
  width: 10px;
  
`
const UPDT=styled.div`
  margin-left: 519px;
  margin-top: 13px;
  
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
    <MAIN>
      <CLR>

    
    <PIC><PIC2  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7l0ql6GGGCSffB_IxNBIHj7jDqUM1e0YDoQ&s" alt="" /></PIC>
      <DIV>
        <NAME>
        <input type=" text" placeholder='name' onChange={(e)=>setname(e.target.value)}/>


        </NAME>
        <EMAIL>
        <input type=" email" placeholder='email' onChange={(e)=>setemail(e.target.value)}/>


        </EMAIL>
        <PSWD>
        <input type="password" placeholder='password' onChange={(e)=>setpassword(e.target.value)}/>


        </PSWD>
        <AGE>
        <input type="number" placeholder='age' onChange={(e)=>setage(e.target.value)}/>


        </AGE>
        <MOBILE>
        <input type="number" placeholder='mobile' onChange={(e)=>setmobile(e.target.value)}/>


        </MOBILE>
        <PINCODE>
        <input type="number" placeholder='pincode' onChange={(e)=>setpincode(e.target.value)}/>


        </PINCODE>
        <SIGN>
        <button onClick={signup} style={{backgroundColor:'lightblue'}}>signup</button>


        </SIGN>
        <UPDT>
        <Link to={'/'}><button style={{backgroundColor:'lightblue'}}> login page</button> </Link>


        </UPDT>
   
</DIV>

</CLR>
 
    </MAIN>
  )
}

export default Signuppage
