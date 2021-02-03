import React from 'react';
import './Header.css';
import logo from '../image/logo.png';
export function Header(){

    return <>
        <div className="header">
        <div className="menubar">
            <span className="menu"><a href="/portpolio">Photo</a></span>
            <span className="menu"><a href="/diary">Diary</a></span>
            <span className="menu"><a href="/playlist">Playlist</a></span>
        </div>
        <a href="/"><img className="logo" src={logo}/></a>
        </div>

    </>;
}