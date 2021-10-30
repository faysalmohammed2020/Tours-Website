import React from 'react';
import img1 from '../../images/aboutus.jpg';
import './About.css'

const About = () => {
    return (
        <div className="About-section">
            <div className ="about-container">
            <div className ="about-img">
            <img src ={img1} alt=""/>
            </div>
            <div className ="about-content">
             <h3 style ={{color:'#F04949'}}>About The Doctors</h3>
             <h1 style ={{fontWeight:'600'}}>Get Best and Amazing Experice With Our Professional Doctors</h1>
             <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
             <button className="btn btn-danger" ><a href="/Register "style={{color:"White",textDecoration:"none"}}>Register Now</a></button>
        </div>
        </div>
    </div>
    );
};

export default About;