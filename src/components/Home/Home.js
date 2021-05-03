import React, { useEffect } from 'react';
import Header from '../Header/Header';
import './Home.css';
import profile from '../../images/royal-anwar-l1MCA0VyNrk-unsplash-removebg-preview.png'
import Projects from '../Projects/Projects';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });

    }, [])
    return (
        <>
            <Header></Header>
            <div className="headerStyle" id='home'>
                <div className="firstPart ">
                    <div className="namePosition ">
                        <h1>DUKUL<br />HOWLADER</h1>
                    </div>
                    <div className="animationText ">
                        <div className="lining">welcome</div>
                        <div className="lining">to my</div>
                        <div className="lining">portfolio</div>
                    </div>
                    <div className="btnPosition ">
                        <button className="btnPositionStyle  btn1 mr-2">HIRE ME</button>
                        <Link to={{pathname: 'https://drive.google.com/uc?export=download&id=1fzgrPSbm4SeHpaVG1LwaT5Pv5bt6yP5I'}} target="_blank"><button className="btnPositionStyle  btn2 "> <FontAwesomeIcon icon={faDownload}/> RESUME</button></Link>
                    </div>
                </div>
                <div className="secondPart">
                    <img className="img-fluid" src={profile} alt="" />
                </div>
            </div>
            <a href="#aboutSection">
                <div className="scroll-down">
                </div>
            </a>
            <br />
            <br />
            <br />
            <br />
            <div className="about" id="aboutSection">
                <div data-aos="fade-left" className="m-auto aboutMeDiv text-center pt-5">
                    <h4 className="py-5">A LITTLE <span style={{ color: '#E04343' }}>ABOUT</span> ME</h4>
                    <p style={{ color: 'darkgoldenrod' }}>I am enough of an artist to draw freely upon my imagination. The point is that when I see a sunset or a waterfall or something, for a split second it's so great, because for a little bit I'm out of my brain, and it's got nothing to do with me. I'm not trying to figure it out, you know what I mean?</p>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div data-aos="fade-up" id='projects'>
                <Projects></Projects>
            </div>
            <div data-aos="flip-up" id='blogs'>
                <Blog></Blog>
            </div>
            <div data-aos="fade-right" id='contact'>
                <Contact></Contact>
            </div>
            <div>
                <Footer></Footer>
            </div>


        </>
    );
};

export default Home;