import React from 'react';
import coder from '../Images/coder.webp';
import cs from '../Images/csharp.png';
import rjs from '../Images/react.png';
import ts from '../Images/ts.png';
import git from '../Images/git.png';
import azure from '../Images/azure.png';
import pc from '../Images/windows.png';
import vs from '../Images/vs.png';

function Uses() {

    return(
        <div className="Uses">
            <div className="flexColumn">
                <div className="flexItem">
                    <div>
                        <img className="coderImg" src={coder} alt="coder" />
                    </div>
                </div>
                <div className="flexItem"> 
                    <h2 className="title">Hello!</h2>
                </div>
                <div className="flexItem"> 
                    <p>Below is a list of the day to day technologies used and most knowledgable with:</p>
                </div>
                <div className="flexItem">
                <div className="flexUses">
                        <div>
                            <img className="usesLogo" src={cs} alt="csharp" />
                        </div>
                        <div className="usesDesc">
                            <p className="inlineTxt">C# .NET - Backend</p>
                        </div>
                    </div>
                    <div className="flexUses">
                        <div>
                            <img className="usesLogo" src={rjs} alt="react" />
                        </div>
                        <div className="usesDesc">
                            <p className="inlineTxt">ReactJS - Frontend</p>
                        </div>
                    </div>
                    <div className="flexUses">
                        <div>
                            <img className="usesLogo" src={ts} alt="typescript" />
                        </div>
                        <div className="usesDesc">
                            <p className="inlineTxt">TypeScript</p>
                        </div>
                    </div>
                    <div className="flexUses">
                        <div>
                            <img className="usesLogo" src={git} alt="git" />
                        </div>
                        <div className="usesDesc">
                            <p className="inlineTxt">Git</p>
                        </div>
                    </div>
                    <div className="flexUses">
                        <div>
                            <img className="usesLogo" src={azure} alt="Azure" />
                        </div>
                        <div className="usesDesc">
                            <p className="inlineTxt">Azure - TFS, DevOps tools</p>
                        </div>
                    </div>
                    <div className="flexUses">
                        <div>
                            <img className="usesLogo" src={pc} alt="windows" />
                        </div>
                        <div className="usesDesc">
                            <p className="inlineTxt">Windows</p>
                        </div>
                    </div>
                    <div className="flexUses">
                        <div>
                            <img className="usesLogo" src={vs} alt="visual studio" />
                        </div>
                        <div className="usesDesc">
                            <p className="inlineTxt">Visual Studio</p>
                        </div>
                    </div>
                    <div className="flexUses">
                        <div className="bottomSpacing"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Uses;