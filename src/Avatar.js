import React from 'react'
import './Avatar.css';

export const Avatar = ({src, alt}) => {
  return (
    <div >
       {src? (
        <img className='avatar-img' src={src}  />
       ): (
       <img className='avatar-img' src="https://media-exp1.licdn.com/dms/image/D5635AQGSbxudngjtrA/profile-framedphoto-shrink_100_100/0/1640752708555?e=1661320800&v=beta&t=xSLX3HFgJWXOwqTFI5FhMInLEg1y7S8uAVg8JL88300" />
    )}
    </div>
  )
}

 