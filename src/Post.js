import React from 'react'
import './Post.css';
import { PostOptions } from './PostOptions';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

export const Post = ({name, description, messege}) => {
  return (
    <div className='post' >
       <div className="post-header">
        <img className='post-avatar' src={"https://yt3.ggpht.com/yti/AJo0G0llMQurT4JHPUZ2Qu1Lo8uHmc_ZX7ZsLA0v2CnRtA=s88-c-k-c0x00ffffff-no-rj-mo"} alt='none'/>
        <div className="post-info">
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
       </div>
       <div className="post-body">
        <p>{messege}</p>
       </div>
       <div className="post-options-send">
     <PostOptions Icon={ThumbUpIcon} text='Like' color='gray' />
     <PostOptions Icon={CommentIcon} text='Comment' color='gray'/>
     <PostOptions Icon={ShareIcon} text='Share' color='gray'/>
     <PostOptions Icon={SendIcon} text='Send' color='gray'/>

       </div>
    </div>
  )
}
