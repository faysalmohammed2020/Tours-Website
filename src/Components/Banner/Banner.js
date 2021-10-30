import React from 'react';
import image1 from '../../images/travel banner.jpg';
import'./Banner.css';

const Banner = () => {
    return (
        <div className="banner-container">
        <div className = "banner">
            <div className="banner-content">
                <h3 style={{color:'#00BDBB'}}>TRAVEL FAR ENOUGH, YOU MEET YOURSELF</h3>
                <h1 style={{fontWeight:'600'}}>Enjoy Your Vacation</h1>
                <p>These Are The Best Travel Tips I’ve Discovered Along The Way On Journey<br/>With Samba and Bossa Nova it’s easy to fall in love with Rio de Janeiro.<br/>Travel With SB Travel Agency</p> 
                <button className="btn btn-primary" ><a href="/Register "style={{color:"White",textDecoration:"none"}}>Register Now</a></button>
            </div>
            <div className="banner-img">
                    <img src={image1}  alt=""/>
            </div>
           
        </div>
       
    </div>
    );
};

export default Banner;