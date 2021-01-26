import React,{useState} from 'react';
import './Profile.css';
import triangle from '../image/Polygon 1.png'
import {Education} from "./Education";
import schoolImage from '../image/1490886282-18-school-building_82486.png'
import git from '../image/github_git_icon_145985.png'
import insta from '../image/social_instagram_43.png'
import youtube from '../image/YOUTUBE_icon-icons.com_65487.png'

export function Profile(){
    const[mouse, setMouse] = useState(true)
    const[school, setSchool] = useState(false)
    const Mouseover = () => {
        setMouse(false);
        console.log(mouse);
    }

    const Mouseout = () => {
        setMouse(true);
        console.log(mouse);
    }

    const Schoolover = () => {
        setSchool(true);
    }

    const Schooleout = () => {
        setSchool(false);
    }

    return <>
        {mouse ?(<div className="welcome" onMouseOver={Mouseover}>welcome to <br/> jisungKim blog</div>): null}
        <div className="photo" onMouseOut={Mouseout}></div>
        <div className="main">
            <img className="polygon" src={triangle}/>
            <h2 className="profile">PROFILE</h2>
            <div><p className="first_letter">N</p><p className="letter">AME_ 김지성</p></div>
            <div><p className="first_letter">D</p><p className="letter">ATE OF BIRTH_ 2001.08.10</p></div>
            <div><p className="first_letter">E</p><p className="letter">MAIL_ cham0810@kookmin.ac.kr</p></div>
            <div><p className="first_letter">M</p><p className="letter">BTI_ ENFP-T</p></div>
            <hr className="line"></hr>
            <h2 className="profile">EDUCATION</h2>
            <img src={schoolImage} className="school" onClick={Schoolover}/>
            {school ? <Education/>:null}
            <hr className="line"></hr>
            <img src="git" className="foot"/>
            <img src="git" className="foot"/>
            <img src="git" className="foot"/>

        </div>

    </>;
}