import React, { Fragment } from 'react';
import './InputOptions.css';

 const InputOptions = ({Icon, title, color}) => {
  return (
    <>
    <div className="all-options">

     <div className="input-feed-option">
        {Icon && <Icon className='input-feed-option-icon' style={{color:color}}/>}
       <h3 className='input-feed-option-title'>{title}</h3> 
    </div>
    </div>
  
    </>
  )
}

export default InputOptions;