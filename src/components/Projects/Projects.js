import React from "react";
import './Projects.css';
import gomovers from '../../images/PrtScr capture_2.jpg';
import gadget from '../../images/Gadget Shop.jpg';
import metro from '../../images/Metro.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";



const ProjectDetails = [
    {
        id:1,
        name: 'GOMOVERS',
        Img: gomovers,
        details: 'This app is used for book transportation in a reliable way',
        gitLink: 'https://github.com/DukulH/go-movers-client',
        liveSite: 'https://gomovers-8a568.web.app/'
    },
    {
        id:2,
        name: 'Gadget Shop',
        Img: gadget,
        details: 'This app is used for book transportation in a reliable way',
        gitLink: 'https://github.com/DukulH/gadget-shop-client',
        liveSite: 'https://gadgetshop-5c85b.web.app/'
    },
    {
        id:3,
        name: 'Metro Riders',
        Img: metro,
        details: 'This app is used for book transportation in a reliable way',
        gitLink: 'https://github.com/DukulH/metro-riders',
        liveSite: ' https://metro-riders.web.app/'
    },

]

const Projects = () => {
    return (
        <>
            
            <h1 className='text-center mt-5 mb-5'><span style={{color:'#d5c455'}}>PROJECTS</span></h1>    
            <div className="container mt-5 showStyle">
                
                {
                    ProjectDetails.map(project =>
                        <div key={project.id} className=" m-auto displayDesign">
                            <div className="card mb-3 text-center zoom">
                                <img className="card-img-top img-fluid w-50 mx-auto" src={project.Img} alt="" />
                                <div className="card-body mt-4">
                                    <h3 className="card-title line animation">{project.name}</h3>
                                    <p className="card-text textResponsive">{project.details}</p>
                                    <a href={project.gitLink} target="_blank" rel="noreferrer"><button className="githubBtn"><FontAwesomeIcon icon={faGithub} /> Github</button></a>
                                    <a href={project.liveSite} target="_blank" rel="noreferrer"><button className="liveBtn"><FontAwesomeIcon icon={faLink} /> Live Site</button></a>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            


        </>

    );
}

export default Projects;