import React from 'react';
import selfie from '../Images/erik.jpeg';
import mely from '../Images/mely.png';

function Work() {

    return (
        <div className="Work">
            <div className="flexColumn">
                <div className="flexItem flexItemSelfPic">
                    <div>
                        <img className="landingCircleImg" src={selfie} alt="self picture" />
                    </div>
                </div>
                <div className="flexItem"> 
                    <h2 className="title">My Freelance Work</h2>
                </div>
                <div className="flexItem flexProjects">
                    <div className="freelanceProject" onClick={() => {window.location.href=`https://www.mely.photos`}}>
                        <img className="projectImage" src={mely} alt="mely" />
                        <h3>Mely Photography</h3>
                        <p>Freelance photography site that renders photos. ReactJS frontend and C# .NET Backend.</p>
                    </div>
                    {/* Place more projects here:
                        <div className="freelanceProject">
                            img size = 820 x 550
                        </div> */}
                </div> 
            </div>
        </div>

    );
}

export default Work;

