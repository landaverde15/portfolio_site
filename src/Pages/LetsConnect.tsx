import React from 'react';
import '../App.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import pdfResume from './ErikResume.pdf';

function LetsConnect() {
    return (
        <div className="LetsConnect">
            <div className="flexColumnConnect">
                <div className="flexItemConnect1">
                    <h1 className="nameTitle">Let's Connect! &#9996;</h1>
                </div>
                <div className="flexItemConnect2">
                    <div>
                        <GitHubIcon fontSize="large" onClick={()=> window.open("https://github.com/landaverde15", "_blank")}/>
                    </div>
                    <div>
                        <LinkedInIcon fontSize="large" onClick={()=> window.open("https://www.linkedin.com/in/erik-landaverde-a795b8287/", "_blank")}/>
                    </div>
                    <div>
                        <InstagramIcon fontSize="large" onClick={()=> window.open("https://www.instagram.com/eazydarce/", "_blank")}/>
                    </div>
                </div>
                <div className="flexItemConnect3">
                    <a className="resume" href={pdfResume} download="ErikLandaverdeResume.pdf">Download Resume</a>
                </div>
                <div className="flexItemConnect4">
                    <a className="email" href="mailto:landaverde.erik10@gmail.com">Send Me An Email</a>
                </div>
            </div>
        </div>
    );
}

export default LetsConnect;