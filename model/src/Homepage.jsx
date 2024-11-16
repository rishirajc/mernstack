import React from 'react'
import Nevbar from './Components/Nevbar'
import {styled} from   "styled-components"
import Carousel from 'react-bootstrap/Carousel';




const Div=styled.div`
width: 100%;
min-height: 100vh;
margin-top: 10px;
`
const FIRST=styled.div`
width:100%;
height: 500px;
display: flex;
align-items: center;
justify-content:center;
`
const Image=styled.img`
width: 100%;
height: 519px;
` 
const SEIMAGE=styled.div`
width: 100%;
height: 500px;
display: flex;
align-items: center;
justify-content:center;
  
`
const CHILD=styled.img`
width: 100%;
height: 479px;
  
`
const THIRD=styled.div`
width:100%;
height: 500px;
display: flex;
align-items: center;
justify-content:center;
`
const THREE=styled.img`
width: 100%;
height: 519px;
  
`
const COUR=styled.div`
width:100%;
height: 500px;
display: flex;
align-items: center;
justify-content:center;
margin-top: 130px;
`
const Homepage = () => {
  return (
    <div>
        <Nevbar/>
        <Div>
          <FIRST>
          <Image src="https://www.entheosweb.com/wp-content/uploads/2024/06/276692-original-1024x640.webp" alt="" />

          </FIRST>
          <SEIMAGE>
          <CHILD  src="https://s.tmimgcdn.com/scr/800x500/312900/anime-loop-anime-manga-amp-movies-streaming-html-website-template_312920-2-original.png" alt="" />

          </SEIMAGE>

          <THIRD>
            <THREE src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2024/03/20.webp?ssl=1" alt="" />
          </THIRD>
          
        </Div>
        <COUR>
        <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/be-problem-solver/image/upload/v1698390451/top-anime-websites-to-watch_duwbpr.webp"
          alt="First slide"
        />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://awaxtech.com/images/tvDj-free-anime-websites.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
  
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ytimg.com/vi/ih397oYBw1E/maxresdefault.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
  
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  
        </COUR>
   
    </div>
  )
}

export default Homepage
