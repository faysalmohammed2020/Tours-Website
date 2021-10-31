import React from 'react';
import img1 from '../../images/about.jpg';
import './About.css'

const About = () => {
    return (
        <div className="About-section">
            <div className ="about-container">
            <div className ="about-img">
            <img src ={img1} alt=""/>
            </div>
            <div className ="about-content">
             <h3 style ={{color:'#00BDBB'}}>About The Sb Travel</h3>
             <h1 style ={{fontWeight:'600'}}>Travel marketers are not just selling trips abroad</h1>
             <p>Travel marketers are not just selling trips abroad – they’re selling dreams, adventure, and memories. But travel trends change rapidly, and this can prove tricky when it comes to marketing your professional travel or tour operation service. Managing content, handling inquiries, social media and customer relations will all begin to burn a hole in your pocket (and take up your time) if you aren’t ultimately getting the results you want. Marketing as a tour operator takes careful planning and requires a solid strategy to ensure high ROI, healthy conversion rates, and competitive search rankings. If you’re strapped for ideas or looking for inspiration for your content marketing strategy, here are five top ideas for producing killer content that people will love.</p>
             
        </div>
        </div>
    </div>
    );
};

export default About;