import React from 'react';
import './Playlist.css';
import mainImage from '../image/turntable-1337986_1920.jpg'
import MOVIE_CD from '../image/music_cd.png'
import LULLABY_CD from '../image/lullaby.png'
import NICOTINE_CD from '../image/nicotine_cd.png'
import WEDDING_CD from '../image/wedding_cd.png'
export function Playlist(){

    return <>
        <img src={mainImage} className="mainImage"/>
        <h2 className="myplaylist">MY PLAYLIST</h2>
        <p className="clickme">듣고싶은 노래에 마우스를 올려보세요</p>
        <div className="musicPackage">
            <span>
                 <img src={MOVIE_CD} className="music"/>
                 <p className="name">MOVIE - JUNNY</p>
            </span>
            <span>
                 <img src={LULLABY_CD} className="music"/>
                 <p className="name">자장가 - IU</p>
            </span>
            <span>
                 <img src={NICOTINE_CD} className="music"/>
                 <p className="name">nicotine - ashley alexander</p>
            </span>
        </div>
        <div className="musicPackage">
            <span>
                 <img src={WEDDING_CD} className="music"/>
                 <p className="name">축가 - 그_냥</p>
            </span>
            <span>
                 <img src={LULLABY_CD} className="music"/>
                 <p className="name">자장가 - IU</p>
            </span>
            <span>
                 <img src={MOVIE_CD} className="music"/>
                 <p className="name">MOVIE - JUNNY</p>
            </span>
        </div>
        {/*<div className="musicPackage">*/}
        {/*    <span>*/}
        {/*         <img src={MOVIE_CD} className="music"/>*/}
        {/*         <p className="name">MOVIE - JUNNY</p>*/}
        {/*    </span>*/}
        {/*    <span>*/}
        {/*         <img src={LULLABY_CD} className="music"/>*/}
        {/*         <p className="name">자장가 - IU</p>*/}
        {/*    </span>*/}
        {/*    <span>*/}
        {/*         <img src={MOVIE_CD} className="music"/>*/}
        {/*         <p className="name">MOVIE - JUNNY</p>*/}
        {/*    </span>*/}
        {/*</div>*/}

    </>;
}