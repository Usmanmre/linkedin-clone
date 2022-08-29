import React from "react";
import "./FollowbarOptions.css";

const FollowbarOptions = ({ title, logo }) => {
  return (
    <div className="followbar-options">
      <div className="single-follow">
        <img className="avatar-follow" src={logo} alt="" />

        <div className="follow-text">
          <p className="text-heading">{title}</p>
          <p className="normal-text">Compnay . Information </p>
          <button className="follow-btn">+ Follow</button>
        </div>
      </div>
    </div>
  );
};

export default FollowbarOptions;
