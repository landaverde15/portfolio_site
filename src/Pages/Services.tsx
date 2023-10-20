import ServiceInfo from "../Types/ServiceInfo";
import ServiceBox from "../ReusableComponents/ServiceBox";
import CodeImg from '../Images/code.png';
import CloudImg from '../Images/cloud.png';
import EngineerImg from '../Images/engineer.png';

function Services() {
    let services:ServiceInfo[] = [
        {ID: 0, Title: "Web, Mobile and Software Development", ImageURL: CodeImg, 
            Info: "I am experienced in web, mobile, and software development. I've developed enterprise level back end and front end services for large corporations that have 400,000+ daily users. Have an idea? I can help!"},
        {ID: 1, Title: "Application Cloud Deployment", ImageURL: CloudImg, 
            Info: "Need assistance with a cloud deployment or an already deployed application? I've got experience with Azure, AWS, and Docker containers. Let's work together to make your application deployment or update a seemless process. If you already have an application and just need an update - I can help you with automated continuous integration and continuous deployments."},
        {ID: 2, Title: "General IT Maintenance", ImageURL: EngineerImg, 
            Info: "Having issues that are non-code related? I have plenty of IT Help Desk experience. From troubleshooting commonly used Windows, Mac, Office 365 and Cloud software to getting your home office setup. Wiring up monitors and getting under desks is not foreign to me! Let's make your clean and minimalistic setup!"}
    ];

    const renderServices:JSX.Element[] = services.map((service:ServiceInfo) => {
        return (
            <ServiceBox ID={service.ID} Title={service.Title} Info={service.Info} ImageURL={service.ImageURL} />
        );
    });
    
    return (
        <div className="Services">
            <div>
                <h1 className="servicesPageTitle">Services</h1>
            </div>
            <div className="servicesInnerDiv2">
                {renderServices}
            </div>
        </div>
    );
}

export default Services;