import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteDatas, ProfileData } from './Api'
import { Link } from 'react-router-dom'
import {styled} from     "styled-components"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const EMG=styled.img`
width:100%;
height: 500px;
  
`
const BTN=styled.div`
width:100%;
height: 500px;
margin-left: 40%;
`
const SEC=styled.div`
width:20%;
height: 500px;

  
`
const MAIN=styled.div`
  background-color: yellow;
  min-height: 110vh;
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
      setstate1(data.message)

    })
  }
  return (
    <MAIN>
    
    

      <BTN>
        <SEC>

    
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.shutterstock.com/image-vector/adventurous-girl-poses-sideways-her-600nw-2389366175.jpg" />
      <Card.Body>
        <Card.Title>{state?.name}</Card.Title>
        <Card.Text>
          email : {state?.email}
 
        </Card.Text>
        <Card.Text>
          mobile : {state?.mobile}
 
        </Card.Text>
        <Card.Text>
          age : {state?.age}
 
        </Card.Text>
  
        <Button onClick={cleardata} variant="danger">delete</Button>
        <Link to={'/update'}><Button variant='success'>update</Button></Link>

      </Card.Body>
    </Card>
    </SEC>
    </BTN>

      
    </MAIN>
  )
}

export default Profilepage
