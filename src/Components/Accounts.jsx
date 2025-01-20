import Button from "./Button";
import React from "react";
import VerifiedIcon from '@mui/icons-material/Verified';

export default function Account({profilePhoto, title}){
    return(
        <div className="account">
            <div className="account-info">
                <img src={profilePhoto} />
                <h3>{title}</h3>
                <VerifiedIcon fontSize="small"color="primary"/>
                <span>@{title}</span>
            </div>
            <button className="follow">Follow</button>
        </div>
    );
}