import React, { useEffect, useState } from 'react';
import '../App.css';
import downArrow from '../Images/downArrow.webp';
import selfie from '../Images/erik.jpeg';
import es from '../Images/el-salvador.png';
import torogoz from '../Images/torogoz.png';
import ig from '../Images/instagram.png';
import dl from '../Images/download.png';
import gh from '../Images/githubgreen.png';
import resume from '../Images/ErikResume.pdf';
import { HashLoader } from 'react-spinners';

function Landing() {

    let arrow: string = "  >";
    let arrow2:string = "->";
    let currentYear:number = new Date().getFullYear();
    let [showLoading, setShowLoading] = useState<boolean>(true);
    let [showImage, setShowImage] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {setShowLoading(false); setShowImage(true)}, 3000);
    });

    return (
        <div className="Landing">
            <div className="flexColumn">
                <div className="flexItem flexItemSelfPic">
                    <div>
                        {showLoading ? <div className="loaderDiv"><HashLoader color="#ffffff"/></div> : ""}
                        {showImage ? <img className="landingCircleImg" src={selfie} alt="self picture" /> : ""}
                    </div>
                </div>
                <div className="flexItem">
                    <div className="landingDesc">
                        Hello, I'm a Software Engineer based in US from El Salvador!
                        <img className="esLogo" src={es} alt="El Salvador" />
                    </div>
                </div>
                <div className="flexItem landingFlexItem2">
                    <div className="nameDescDiv1">
                        <h2>Erik Landaverde</h2>
                        <p>Building the Web ( Web / Mobile / Cloud )</p>
                    </div>
                    <div>
                        <img className="toroLogo" src={torogoz} alt="torogoz" />
                    </div>
                </div>
                <div className="flexItem">
                    <h2 className="title">Work</h2>
                    <p className="pDesc">
                        I'm a Full Stack Software Engineer based in Los Angeles, CA. My experience
                        includes: designing, developing and deploying large scale enterprise applications. When
                        I am not coding I am either training Jiu Jitsu, watching anime, or eating ramen.
                    </p>
                    <div className="myPortfolioBtn" onClick={() => {window.location.href=`/work`}}>My Portfolio &nbsp; &nbsp;{arrow}</div>
                </div>
                <div className="flexItem">
                    <h2 className="title">Timeline</h2>
                    <div className="flexTimeline">
                        <div>
                            <h3 className="yearTitle inlineTxt">1996</h3>
                        </div>
                        <div className="timelineDesc">
                            <p className="inlineTxt">Born in Los Angeles, CA</p>
                        </div>
                    </div>
                    <div className="flexTimeline">
                        <div>
                            <h3 className="yearTitle inlineTxt">2018</h3>
                        </div>
                        <div className="timelineDesc">
                            <p className="inlineTxt">Intern Helpdesk Engineer @ NKSFB</p>
                        </div>
                    </div>
                    <div className="flexTimeline">
                        <div>
                            <h3 className="yearTitle inlineTxt">2019</h3>
                        </div>
                        <div className="timelineDesc">
                            <p className="inlineTxt">Intern Web Developer @ Kinecta Federal Credit Union</p>
                        </div>
                    </div>
                    <div className="flexTimeline">
                        <div>
                            <h3 className="yearTitle inlineTxt">2019</h3>
                        </div>
                        <div className="timelineDesc">
                            <p className="inlineTxt">Web Developer @ Kinecta Federal Credit Union</p>
                        </div>
                    </div>
                    <div className="flexTimeline">
                        <div>
                            <h3 className="yearTitle inlineTxt">2020</h3>
                        </div>
                        <div className="timelineDesc">
                            <p className="inlineTxt">Graduated from California State University Northridge with a Bachelors in Computer Information Technology</p>
                        </div>
                    </div>
                    <div className="flexTimeline">
                        <div>
                            <h3 className="yearTitle inlineTxt">2020</h3>
                        </div>
                        <div className="timelineDesc">
                            <p className="inlineTxt">Software Engineer I @ Kinecta Federal Credit Union</p>
                        </div>
                    </div>
                    <div className="flexTimeline">
                        <div>
                            <h3 className="yearTitle inlineTxt">2023</h3>
                        </div>
                        <div className="timelineDesc">
                            <p className="inlineTxt">Software Engineer II @ Kinecta Federal Credit Union</p>
                        </div>
                    </div>
                </div>
                <div className="flexItem">
                    <h2 className="title">Find Me</h2>
                    <div className="flexSocials" onClick={() => {window.location.href=`https://www.instagram.com/eazydarce/`}}>
                        <div>
                            <img className="socialsLogo" src={ig} alt="instagram" />
                        </div>
                        <div>
                            <p className="inlineTxt socialsDesc">@EazyDarce</p>
                        </div>
                    </div>
                    <div className="flexSocials">
                        <div>
                            <img className="socialsLogo" src={dl} alt="download" />
                        </div>
                        <div>
                            <a className="resumeLink" href={resume} download="ErikResume" target="_blank">
                                <p className="inlineTxt socialsDesc">{arrow2} &nbsp; Download Resume</p>
                            </a>
                        </div>
                    </div>
                    <div className="flexSocials" onClick={() => {window.location.href=`https://github.com/landaverde15`}}>
                        <div>
                            <img className="socialsLogo" src={gh} alt="github" />
                        </div>
                        <div>
                            <p className="inlineTxt socialsDesc">@Landaverde15</p>
                        </div>
                    </div>
                </div>
                <div className="flexItem">
                    <p className="footerTxt">© {currentYear} Erik Landaverde. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
}

export default Landing;