import React from 'react'
import Card from './Card'
import './Cards.css'

const Cards = ({courses,cateogary}) => {
    const getCourses=()=>{
        if(cateogary==="All"){
            let all=[];
        Object.values(courses).forEach((cat)=>{
            cat.forEach((course)=>{
                all.push(course);
            })
        })
        return all;
    }
    else{
        return courses[cateogary];
    }
    }
    
  return (
    <div className='Card'>
        
        {getCourses().map((course)=>{
            return(
           <Card course={course}/>)
        })
    }
      
    </div>
  )
}

export default Cards
