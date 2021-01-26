import React from 'react';
import './Playlist.css';
import mainImage from '../image/turntable-1337986_1920.jpg'
import MOVIE from '../image/995589.jpg'
import cd from '../image/cdcdcd.png'

export function Playlist(){

    return <>
        <img src={mainImage} className="mainImage"/>
        <h2 className="myplaylist">MY PLAYLIST</h2>
        <p className="clickme">듣고싶은 노래를 클릭해보세요</p>
        <div className="musicPackage">
            <img src={MOVIE} className="music"/>
            <img src={MOVIE} className="music"/>
            <img src={MOVIE} className="music"/>
        </div>
        <div className="namePackage">
            <p className="name">MOVIE - JUNNY</p>
            <p className="name">MOVIE - JUNNY</p>
            <p className="name">MOVIE - JUNNY</p>
        </div>
        <div className="musicPackage">
            {/*<img src={cd} className="cd"/>*/}
            <img src={MOVIE} className="music"/>
            <img src={MOVIE} className="music"/>
            <img src={MOVIE} className="music"/>
        </div>
        <div className="namePackage">
            <p className="name">MOVIE - JUNNY</p>
            <p className="name">MOVIE - JUNNY</p>
            <p className="name">MOVIE - JUNNY</p>
        </div>
        <div className="musicPackage">
            <img src={MOVIE} className="music"/>
            <img src={MOVIE} className="music"/>
            <img src={MOVIE} className="music"/>
        </div>
        <div className="namePackage">
            <p className="name">MOVIE - JUNNY</p>
            <p className="name">MOVIE - JUNNY</p>
            <p className="name">MOVIE - JUNNY</p>
        </div>
    </>;
}