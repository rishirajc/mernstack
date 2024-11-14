import React from 'react'
import Nevbar from './Components/Nevbar'
import {styled} from   "styled-components"


const Div=styled.div`
width: 100%;
height: 1000px;
margin-top: 10px;
margin-left  :300px ;
`
const Homepage = () => {
  return (
    <div>
        <Nevbar/>
        <Div>
          <img src="https://www.entheosweb.com/wp-content/uploads/2024/06/276692-original-1024x640.webp" alt="" className='image'/>
          <img  src="https://img.freepik.com/premium-vector/gloomy-woman-anime-landing-page-template_150972-526.jpg" alt="" />
          <div><img src="https://s.tmimgcdn.com/scr/800x500/312900/anime-loop-anime-manga-amp-movies-streaming-html-website-template_312920-2-original.png" alt="" />
          </div>
        </Div>
    </div>
  )
}

export default Homepage
