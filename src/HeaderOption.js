import React from 'react'
import './HeaderOption.css';
import { Avatar } from './Avatar';
// import {Avatar} from "@mui/icons-material";


export const HeaderOption = ({ Icon, title}) => {
  return (
    <>
    <div className="all-header-options">

    <div className='header-Option' >
      {Icon && < Icon className='headerOption_icon' /> }
    
      <h3 className='headerOption_title' >{title }</h3>
    </div>
    </div>
   
    </>
    
  )
}
