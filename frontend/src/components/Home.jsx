import React from 'react'
import Navbar from './Navbarh'
import data from "../class.json"
import "../cssStyle/Home.css"
import image from "../images/avatark.png"

const Home = () => {
  return (
    <div>
      <Navbar />
      <div id='container'>
      <br/>
      <br/>
        <p id='title'>Title</p>
        <p id='headtext'>This course focuses on understanding the basics of technical writing and developing technical writing skills. In this course you will learn techniques to analyze writing contexts which helps you to produce effective, clean, and reader-center documents efficiently.</p>
        <button>Read More</button>
      </div>
      <div>
      <p id='class'>Classes</p>
      <p>This course focuses on understanding the basics of technical writing and developing technical writing skills.</p>
      </div>
      <div id='card'>

      {data.map((el)=>(
        <div key={el.ID}>
        <img src={image} alt={el.ID}/>
        <h2>{el.Name}</h2>
        <p>{el.ShortDesc}</p>
        <button style={{padding:"5px"}}>View</button>
        
        </div>
      ))}
      
      </div>

      <div id='footer'>

      <div>
      Copyrigth c 2021 All Right Reserved
      </div>
      <div>
      <div></div>
      </div>
        Back To Top
      </div>

    </div>
  )
}

export default Home
