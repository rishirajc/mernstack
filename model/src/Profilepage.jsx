import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteDatas, ProfileData } from './Api'
import { Link } from 'react-router-dom'
import {styled} from     "styled-components"
const IMAG=styled.div`
  margin-top: 30px;
  margin-left: 200px;
`
const BTN=styled.div`
    margin-top: -21px;
    margin-left: 201px;
 
`
const Profilepage = () => {
  const localvalue=useSelector((state)=>state.login.loginData)
  console.log('local storage value',localvalue);
  const Id=localvalue?.userid

  const[state,setstate]=useState()
  const[state1,setstate1]=useState()


  const dispatch=useDispatch()

  useEffect(()=>{
    ProfileData(Id).then((data)=>{
      console.log('profle page data',data);
      setstate(data)
      
    })
    
  },[])
  
  function cleardata(){

    DeleteDatas(Id,dispatch).then((data)=>{
      setstate1(data)

    })
  }
  return (
    <div>
      <IMAG>
        <img src="https://cms.involve.me/templates/personal-profile.jpg" alt="" />
      </IMAG>
    
      <h2>{state1}</h2>
      <h2>{state?.name}</h2>
      <h2>{state?.email}</h2>
      <h2>{state?.mobile}</h2>
      <h2>{state?.age}</h2>
      <h2>{state?.password}</h2>
      <BTN>
      <button onClick={cleardata}>delete </button>
    <Link to={'/update'}><button>update</button></Link>

      </BTN>

      
    </div>
  )
}

export default Profilepage
