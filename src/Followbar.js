import React from "react";
import "./Followbar.css";
import FollowbarOptions from "./FollowbarOptions.js";

const Followbar = () => {
  return (
    <>
      <div className="follow-bar">
        <div className="follow-header-text">Add to your feed</div>

        <div className="followoptioncomp">
          <FollowbarOptions title={'Fiverr.com'} logo={'https://play-lh.googleusercontent.com/AKm3yudrEyrdvy9YmPUJjRkb0p0tyCed8tE1xXcsp6_uyeZhSoUSj41T-l9-dsMuxFY'} />
          <FollowbarOptions title={'Freelancer.com'} logo={'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1497608054/v6pqkwvwvl5ixnz0y4h3.png'} />
          <FollowbarOptions title={'Upwork.com'}  logo={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJoYn2ouAm2GzELxlJWpox5PjSn_VLEavXC1o06Ytv8VhJOI8XyUL3HI-lOV2h7vQo8Zs&usqp=CAU'}/>
        </div>
      </div>
    </>
  );
};

export default Followbar;
