import React from 'react';
import img1 from '../../images/eiffel.png';
import img2 from '../../images/Tower Bridge.png';
import img3 from '../../images/Sidney.png'
import './HomeOtherSection.css';


const HomeOtherSection = () => {
    return (
        <div>
           

             <div className = "TourType-container">
                 <h1 className="Tour-h1">Tour Types</h1>
                 <div className="Card-images">
                 <div className="card-one">
                   <img src={img1} alt="Tour Images"/>
                   <h3>Eiffel Tower</h3>
                 </div>

                 <div className ="card-two">
                 <img src={img2} alt="Tour Images"/>
                 <h3>Tower Bridge</h3>
                 </div>
                 <div className="card-three">
                 <img src={img3} alt="Tour Images"/>
                 <h3>Sidney Opera House</h3>
                 </div>
                  </div>

             </div>
             <div className = "Tour-subscribe">
                 <h1 className="Tour-subscribe-h1">TRAVEL FAR ENOUGH, YOU MEET YOURSELF</h1>
                 <p className="Tour-subscribe-p">Travel marketers are not just selling trips abroad – they’re selling dreams, adventure, and memories. But travel trends change rapidly, and this can prove tricky when it comes to marketing your professional travel or tour operation service. Managing content, handling inquiries, social media and customer relations will all begin to burn a hole in your pocket</p>
                 <button className="btn btn-primary" id="Subscribe-btn">Subscribe</button>
            

             </div>
        </div>
    );
};

export default HomeOtherSection;