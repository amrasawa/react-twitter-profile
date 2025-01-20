import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DateRangeIcon from "@mui/icons-material/DateRange";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import LinkIcon from "@mui/icons-material/Link";
import SyncIcon from "@mui/icons-material/Sync";
import "./MainPage.css";
import Profile from "./Profile";
import PersonIcon from '@mui/icons-material/Person';
import { AppBar, Box, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import Account from "./Accounts";
export default function MainPage() {
  return (
    <div className="main-page">
      <div className="main-page-header">
        <ArrowBackIcon />
        <h1>React</h1>
        <span>2,511 posts</span>
      </div>
      <div>
        <Profile />
      </div>
      <div className="bio">
        <h1>React</h1>
        <span id="username">@react.js</span>
        <p>The liberary for web and native user interfaces</p>
        <div className="links">
          <div className="link">
            <LinkIcon />
            <span>react.dev</span>
          </div>
          <div className="link">
            <DateRangeIcon />
            <span id="date">
              Joined <data>July 2023</data>
            </span>
          </div>
        </div>
        <div className="follow-info">
          <div>
            <strong>285</strong>
            <span>Following</span>
          </div>
          <div>
            <strong>708.1k</strong>
            <span>Followers</span>
          </div>
        </div>
      </div>
      <div className="tabs">
        <Tabs centered>
          <Tab label="Posts" />
          <Tab label="Replies" />
          <Tab label="Media" />
          <Tab label="Likes" />
        </Tabs>
      </div>
      <div className="post">
        <div className="post-header">
          <SyncIcon fontSize="small" />
          <span>React reposted</span>
        </div>
        <div className="repost">
          <img src="/person.jpeg" alt="" />
          <div className="repost-detials" >
            <div className="repost-username">
                <strong>danabramov.bsky.social</strong>
                <span>
                @dan_abramov . <date>May 29</date>
                </span>
            </div>
            <div className="repost-post">
                <strong>
                Happy 10th birthday to <span>@react.js</span>!
                </strong>
            </div>
            </div>
            </div>
          <div className="repost-icons">
            <div className="repost-icon">
              <ChatBubbleOutlineIcon />
              <span>46</span>
            </div>
            <div className="repost-icon">
              <SyncIcon />
              <span>675</span>
            </div>
            <div className="repost-icon">
              <FavoriteBorderIcon />
              <span>3,701</span>
            </div>
            <div className="repost-icon">
              <EqualizerIcon />
              <span>1.1M</span>
            </div>
          </div>
      </div>
      <div className="follow-suggestions">
        <div className="suggestion">
            <div className="followed-by">
                <PersonIcon fontSize="small"/> <span>Lorem ipsum dolor sit amet consectetur.</span>
            </div>
            <Account profilePhoto='/tailwindcss.png' title='Tailwind CSS'/>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt similique saepe dolore sit, in nostrum. Doloremque, dolor recusandae. Incidunt, odit.</p>
        </div>
        <div className="suggestion">
            <div className="followed-by">
                <PersonIcon fontSize="small"/> <span>Lorem ipsum dolor sit amet consectetur.</span>
            </div>
            <Account profilePhoto='/typescript.png' title='TypeScript'/>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt similique saepe dolore sit, in nostrum. Doloremque, dolor recusandae. Incidunt, odit.</p>
        </div>
        <div className="suggestion">
            <div className="followed-by">
                <PersonIcon fontSize="small"/> <span>Lorem ipsum dolor sit amet consectetur.</span>
            </div>
            <Account profilePhoto='freeCode.jpg' title='Free Code Camp'/>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt similique saepe dolore sit, in nostrum. Doloremque, dolor recusandae. Incidunt, odit.</p>
        </div>
        <a>Show more</a>
      </div>

    </div>
  );
}
