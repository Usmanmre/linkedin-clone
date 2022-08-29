import React from 'react'
import './PostOptions.css';

export const PostOptions = ({Icon,text, color }) => {
  return (
  
      <>
    <div className="post-options">
       <div className="post-option">

          {  <Icon  className="post-option-icon" style={{color:color}}/> }
          <h3 className='text-comment' >{text}</h3>
       </div>
       
   
    </div>
      </>
  )
}
