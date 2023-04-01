import React, {useState, useEffect} from 'react';
import '../App.css';
import collage from '../Images/collage.png';

function AboutMe() {
    let [age, setAge] = useState(0);

    useEffect(() => {
        const today:any = new Date();
        const birthDate:any = new Date("2019/08/14");
        let getAge:number = today.getFullYear() - birthDate.getFullYear();
        const m:number = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            getAge--;
        }
        age = getAge;
        setAge(age);
    }, [age]);

    return (
        <div className="AboutMe">
            <div className="flexItemAbout1">
                <div>
                    <h1 className="aboutTitle">01 About Me_</h1>
                    <h4 className="aboutText">
                        Hello! My name is Erik. I am a Software Engineer from El Salvador living in Los Angeles, CA.
                        During my journey through college internships and exploring all the programming technologies there are, 
                        I discovered that Back End Development grew on me and would be my favorite to this day. When I am not coding I am either playing with my {age} year old son, watching anime, trying new foods with my wife and son, or training jit jitsu.
                    </h4>
                    <h4 className="aboutText highlightedText">
                        **Note - Please excuse my lack of UI/UX creativity. I am primarily a Back End Developer.
                    </h4>
                </div>
            </div>
            <div className="flexItemAbout2">
                <div>
                    <img className="collage" src={collage} alt="collage"/>
                </div>
                
            </div>
        </div>
    );
}

export default AboutMe;