import React from "react";
import "./MainPage.css";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
export default function Profile() {
  return (
    <div className="profile">
      <div className="gap"></div>
      <div className="profile-header">
        <img width="120px" src="/favicon.ico" alt="react-profile-image" />
       <div className="profile-icons">
          <MoreHorizIcon className="icon" />
          <NotificationAddIcon className="icon" />
          <p className="icon following">Following</p>
        </div>
      </div>
    </div>
  );
}
