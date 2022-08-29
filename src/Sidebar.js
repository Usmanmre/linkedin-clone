import React from "react";
import "./Sidebar.css";
import { Avatar } from "./Avatar";
export const Sidebar = () => {

  const recentitem=(topic)=>{

      <div className="sidebar-recent-item">
        <span className="sidebar-hash">#</span>
        <p>{topic}</p>
      </div>
  };


  return (

   
    <div className="sidebar">
      
      <div className="sidebar-top">
        <img
          id="cover-img"
          src="https://images.unsplash.com/photo-1618336084286-7ae3ce88158b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
          alt=""
        /> 
        <div >

         <Avatar className="avatar-img" src={"https://yt3.ggpht.com/yti/AJo0G0llMQurT4JHPUZ2Qu1Lo8uHmc_ZX7ZsLA0v2CnRtA=s88-c-k-c0x00ffffff-no-rj-mo"} alt=""/>
        </div>
        <h2> Muhammad Usman ✨ Expert Brand Identity Designer</h2>
        <h4>
          More then 50+ happy international clients | Helping business grow
          faster then EVER.
        </h4>
      </div>
      <div className="stats">

      <div className="profile-stats">
        <p>Who's viewed your profile</p>
        <p className="view-stats">43</p>
      </div>
      <div className="profile-stats">
        <p>Impressions of your post </p>
        <p className="view-stats">45</p>
      </div>
      </div>
      <div className="premium">
        <p className="access-text">Access exclusive tools insights</p>
        <span className="premium-2">Try Premium for free </span>
      </div>
      <div className="recent_item">
    <p>Recent</p>


      {recentitem('Programming')}
      {recentitem("Programming")}  
      {recentitem("Programming")}
      {recentitem("Programming")}




      </div>
    </div>
  );
};
