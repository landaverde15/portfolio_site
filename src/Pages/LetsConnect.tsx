import React from 'react';
import '../App.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
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
                        <TwitterIcon fontSize="large" onClick={()=> window.open("https://twitter.com/erikito_mma", "_blank")}/>
                    </div>
                    <div>
                        <InstagramIcon fontSize="large" onClick={()=> window.open("https://www.instagram.com/eazydarce/", "_blank")}/>
                    </div>
                </div>
                <div className="flexItemConnect3">
                    <a className="resume" href={pdfResume} download="ErikLandaverdeResume.pdf">Download Resume</a>
                </div>
            </div>
        </div>
    );
}

export default LetsConnect;