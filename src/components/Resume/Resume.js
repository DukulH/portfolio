import React, { useEffect } from 'react';
import Header from '../Header/Header';
import './Resume.css';
import profile from '../../images/andyone--WW8jBak7bo-unsplash.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAccusoft, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faEnvelope, faGraduationCap, faHome, faPhoneAlt, faTasks, faTools } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Resume = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });

    }, [])
    return (
        <div>
            <Header></Header>
            <div className="container m-auto">

                <div className="resume">

                    <div className="profile">
                        <div data-aos="fade-up" class="card text-center mt-4" >
                            <img class=" img-fluid card-img-top w-75 m-auto" src={profile} alt="" />
                            <div class="card-body">
                                <h4 class="card-text">Dukul Howlader Mohin</h4>
                                <p class="card-text"><small>Junior Web Developer</small></p>
                                <p><FontAwesomeIcon icon={faHome} /> 120 west kafrul, Agragon, Taltola, Dhaka-1207</p>
                                <p><FontAwesomeIcon icon={faPhoneAlt} /> +880 18460 69269</p>
                                <p><FontAwesomeIcon icon={faEnvelope} /> dukul.howlader30 @gmail.com</p>
                                <Link to={{pathname: 'https://drive.google.com/uc?export=download&id=1fzgrPSbm4SeHpaVG1LwaT5Pv5bt6yP5I'}} target="_blank"><button className="btnPositionStyle  btn2 w-50"> <FontAwesomeIcon icon={faDownload}/> RESUME</button></Link> <br/>

                                <Link to={{ pathname: 'https://www.linkedin.com/in/dukul-howlader-mohin-833172205/' }} target="_blank" className="socialIconStyle px-2" ><FontAwesomeIcon className="iconSize" icon={faLinkedinIn} /></Link>


                                <Link to={{ pathname: "https://github.com/DukulH" }} target="_blank" className="socialIconStyle px-2"><FontAwesomeIcon className="iconSize" icon={faGithub} /></Link>


                                <Link to={{ pathname: "mailto:dukul.howlader30@gmail.com" }} target="_blank" className="socialIconStyle px-2"><FontAwesomeIcon className="iconSize" icon={faEnvelope} /></Link>

                            </div>
                        </div>
                    </div>

                    <div className="details">
                        <div data-aos="fade-right" class="card my-4 shadow cardInnerGap">
                            <div class="card-body">
                                <h5 class="card-title cardHead"><FontAwesomeIcon icon={faGraduationCap} /> Education</h5>
                                <ul>
                                    <li><p class="card-text">North South University: BSc in Computer Science & Engineering (2017 - Present)</p></li>
                                    <li><p class="card-text">Birshreshtha Munshi Abdur Rouf Public College: HSC (2014-2016)</p></li>
                                    <li><p class="card-text">Monipur High School & College: SSC (2005-2014)</p></li>
                                </ul>
                            </div>
                        </div>
                        <div data-aos="fade-left" class="card my-4 shadow cardInnerGap">
                            <div class="card-body">
                                <h5 class="card-title cardHead"><FontAwesomeIcon icon={faTools} /> Skills</h5>
                                <ul>
                                    <li><p class="card-text"><strong>Front-End:</strong> HTML, CSS, Bootstrap, Material UI, React JS.</p></li>
                                    <li><p class="card-text"><strong>Back-End:</strong> Express JS, Node JS, PHP.</p></li>
                                    <li><p class="card-text"><strong>Programming Language:</strong> C, C++, JAVA, R, Scheme, JavaScript.</p></li>
                                    <li><p class="card-text"><strong>Database:</strong> MongoDB, MySql, PostgreSql.</p></li>
                                    <li><p class="card-text"><strong>Tools:</strong> VS Code, GitBash, Node JS</p></li>
                                </ul>
                            </div>
                        </div>
                        <div data-aos="fade-left" class="card my-4 shadow cardInnerGap">
                            <div class="card-body">
                                <h5 class="card-title cardHead"><FontAwesomeIcon icon={faTasks} /> Projects</h5>
                                <ul>
                                    <li>
                                        <p class="card-text">
                                            <strong>Metro Riders:</strong> This project is based on purchasing tickets online in a metro city and roam around easily. <br />
                                            <strong>Technology:</strong> React JS, Bootstrap, React Router Dom, Firebase, Map. <br />
                                            <strong>Live Site:</strong> https://metro-riders.web.app/ <br />
                                            <strong>Source Code:</strong> https://github.com/DukulH/metro-riders <br />

                                        </p>
                                    </li>
                                    <br />

                                    <li>
                                        <p class="card-text">
                                            <strong>Gadget Shop</strong> Purchase products online. Stay home stay safe<br />
                                            <strong>Technology:</strong> React JS, Bootstrap, React Router Dom, Firebase, Node JS, Express JS, Heroku, Material UI, Font Awesome, React Hook Form<br />
                                            <strong>Live Site:</strong> https://gadgetshop-5c85b.web.app/ <br />
                                            <strong>Source Code:</strong>
                                            <ul>
                                                <li><p><strong>Client-Side:</strong> https://github.com/DukulH/gadget-shop-client <br /></p></li>
                                                <li><p><strong>Server-Side:</strong> https://github.com/DukulH/gadget-shop-server <br /></p></li>
                                            </ul>

                                        </p>
                                    </li>
                                    <br />

                                    <li>
                                        <p class="card-text">
                                            <strong>Go Movers</strong> This app is used for book transportation in a reliable way.<br />
                                            <strong>Technology:</strong> React JS, Bootstrap, React Router Dom, Firebase, Node JS, Express JS, Heroku, Material UI, Font Awesome, React Hook form.<br />
                                            <strong>Live Site:</strong> https://gomovers-8a568.web.app/ <br />
                                            <strong>Source Code:</strong>
                                            <ul>
                                                <li><p><strong>Client-Side:</strong> https://github.com/DukulH/go-movers-client <br /></p></li>
                                                <li><p><strong>Server-Side:</strong> https://github.com/DukulH/go-movers-server <br /></p></li>
                                            </ul>

                                        </p>
                                    </li>
                                    <br />

                                </ul>
                            </div>
                        </div>

                        <div data-aos="fade-up" class="card my-4 shadow cardInnerGap">
                            <div class="card-body">
                                <h5 class="card-title cardHead"><FontAwesomeIcon icon={faAccusoft} /> Activity</h5>
                                <div className="activitySection">
                                    <div data-aos="fade-left" className="activity1">
                                        <strong><p>Languages:</p></strong>
                                        <ul>
                                            <li>English</li>
                                            <li>Bangla</li>
                                        </ul>
                                    </div>
                                    <div data-aos="fade-right" className="activity2">
                                        <strong><p>Courses:</p></strong>
                                        <ul>
                                            <li>Complete Web Development Course With Jhankar Mahbub (01-01-2021 – 27-04-2021)</li>
                                            <li>SCIC 3: Battle Ground (28-04-2021 – present)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Resume;