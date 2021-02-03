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

    return <>
        {mouse ?(<div className="welcome" onMouseOver={Mouseover}>
            <p className="first_row">WELCOME</p>
            <p className="second_row">to__</p>
            <p className="third_row">JisungKim BLOG</p>
        </div>): null}
        <div className="photo" onMouseOut={Mouseout}></div>
        <div className="main">
            <img className="polygon" src={triangle}/>
            <h2 className="profile">PROFILE</h2>
            <div><p className="first_letter">N</p><p className="letter">AME_ 김지성</p></div>
            <div><p className="first_letter">D</p><p className="letter">ATE OF BIRTH_ 2001.08.10</p></div>
            <div><p className="first_letter">E</p><p className="letter">MAIL_ cham0810@kookmin.ac.kr</p></div>
            <div><p className="first_letter">M</p><p className="letter">BTI_ EN(FT)P-T</p></div>
            <div>
                <span className="mbti_detail">외향형</span>
                <div className="mbti">
                    <div className="mbti_1"></div>
                </div>
                <span className="mbti_detail">내향형</span>
            </div>
            <div>
                <span className="mbti_detail">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;직관형</span>
                <div className="mbti">
                    <div className="mbti_2"></div>
                </div>
                <span className="mbti_detail">현실주의형</span>
            </div>
            <div>
                <span className="mbti_detail">이성적사고형</span>
                <div className="mbti">
                    <div className="mbti_3"></div>
                </div>
                <span className="mbti_detail">원칙주의형&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </div>
            <div>
                <span className="mbti_detail">계획형</span>
                <div className="mbti">
                    <div className="mbti_4"></div>
                </div>
                <span className="mbti_detail">탐색형</span>
            </div>
            <div>
                <span className="mbti_detail">자기주장형</span>
                <div className="mbti">
                    <div className="mbti_5"></div>
                </div>
                <span className="mbti_detail">신중형&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </div>

            <hr className="line"></hr>
            <h2 className="profile">EDUCATION</h2>
            <img src={schoolImage} className="school" onClick={Schoolover}/>
            {school ? <Education/>:null}

        </div>

    </>;
}