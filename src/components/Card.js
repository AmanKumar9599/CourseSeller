import React from 'react'
import './Card.css'
const Card = ({course}) => {
  return (
    
    <div className='body'>
        <div className='img'>
        <img src={course.image.url} alt={course.image.alt}></img>
        </div>
        <div className='title'>
            <h3>{course.title}</h3>
        </div>
        <br></br>
        <div className='desc'>
            <p>{course.description.slice(0,100)}...</p>
        </div>
    </div>
  )
}

export default Card
