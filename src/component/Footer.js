import React from 'react';
import './Footer.css';
import git from "../image/github_git_icon_145985.png";
import insta from "../image/social_instagram_43.png";
import youtube from "../image/YOUTUBE_icon-icons.com_65487.png";

export function Footer(){

    return <>
        <div className="foot">
            <a href="https://github.com/JisuuungKim" target="_blank"><img className="icon" src={git}/></a>
            <a href="https://www.instagram.com/z_is_2/"><img className="icon" src={insta}/></a>
            <a href="https://www.youtube.com/channel/UCGFFNoibubEuYbGQYJCeWcg"><img className="icon" src={youtube}/></a>
            <hr className="foot_line"></hr>
        </div>
    </>;
}