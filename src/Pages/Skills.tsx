import React from 'react';
import '../App.css';
import ReactSkillbar from 'react-skillbars';

let techSkills: Array<any> = [
    {
        "type": "C# .NET",
        "level": 100,
        "color": {
            "bar": "#ffb703",
            "title": {
              "text": "#ffffff",
              "background": "#fb8500"
            }
        }
      },
      {
        "type": "React JS",
        "level": 85,
        "color": {
            "bar": "#d9ed92",
            "title": {
              "text": "#ffffff",
              "background": "#76c893"
            }
        }
    }
]; 

let otherSkills: Array<any> = [
    {
        "type": "TypeScript",
        "level": 60,
        "color": {
            "bar": "#e63946",
            "title": {
              "text": "#ffffff",
              "background": "#d00000"
            }
        }
      },
      {
        "type": "Less",
        "level": 60,
        "color": {
            "bar": "#5e60ce",
            "title": {
              "text": "#ffffff",
              "background": "#7400b8"
            }
        }
    }
];

function Skills() {
    return (
        <div className="Skills">
            <div className="flexItemSkills1">
                <h1 className="skillsTitle">02 Technical Skills_</h1>
                <h3 className="skillsHighlightedText">Bread and Butter = C#.NET Framework/Core</h3>
                <p className="skillsDescription">My everyday coding is done in C#.NET. I research, design, develop, test and maintain C# .NET applications
                    which can include: <span className="skillsHighlightedText">API's and UI applications</span>. All of my C# experience has come from builing API interfaces for
                    mobile and desktop platforms to access banking core services and cloud external services.
                </p>
                <h3 className="skillsHighlightedText">Other Technologies = ReactJS</h3>
                <p className="skillsDescription">
                    I've worked on numerous React projects for corporate companies. Most experience has been on
                    building the <span className="skillsHighlightedText">UI for Single Page Application</span> banking services like: donations center, withdrawals,
                    investments. I've done enough React development where it has become my favorite go-to library for personal
                    front end projects.
                </p>
            </div>
            <div className="flexItemSkills2">
                <div className="skills2InnerDiv">
                    <h3>Main Technologies Used</h3>
                    <ReactSkillbar skills={techSkills} animationDuration={5000}/>
                    <h3>Other Familiar Technologies</h3>
                    <ReactSkillbar skills={otherSkills} animationDuration={5000}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;