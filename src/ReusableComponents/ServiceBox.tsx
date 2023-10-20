import React from 'react';
import ServiceInfo from '../Types/ServiceInfo';

function ServiceBox({ID, Title, ImageURL, Info}:ServiceInfo) {

    return (
        <div className="serviceBox">
            <div className="serviceInnerBox1">
                <img src={ImageURL} alt={"service image " + ID}/>
            </div>
            <div className="serviceInnerBox2">
                <h2 className="serviceTitle">{Title}</h2>
                <p className="infoText">{Info}</p>
            </div>
        </div>
    );
}

export default ServiceBox;