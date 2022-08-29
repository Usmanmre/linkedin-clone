import React from "react";
import "./Header.css";
import { HeaderOption } from "./HeaderOption.js";
import { SearchIcon } from "./SearchIcon";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import Work from "@mui/icons-material/Work";
import Message from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "./Avatar";

export const Header = () => {
  return (
    <>
      <div className="header-section">
        <div className="left-section-head">
          <img
            className="linkdin-img"
            src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1660457635~hmac=a7c33e2574bebcff547bd4a0e2e19244"
            alt=""
          />
          <SearchIcon />
        </div>

        <div className="header-right">
          <HeaderOption Icon={HomeIcon} title="Home " />
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />

          <HeaderOption Icon={Work} title="Jobs " />
          <HeaderOption Icon={Message} title="Messaging" />
          <HeaderOption Icon={NotificationsIcon} title="Notification" />
          {/* <figure>
          <Avatar
          id="avatar-img2"
          src={
            "https://yt3.ggpht.com/yti/AJo0G0llMQurT4JHPUZ2Qu1Lo8uHmc_ZX7ZsLA0v2CnRtA=s88-c-k-c0x00ffffff-no-rj-mo"
          }
          alt=""
        />
          </figure> */}
         
        </div>
       
        <div></div>
      </div>
    </>
  );
};
