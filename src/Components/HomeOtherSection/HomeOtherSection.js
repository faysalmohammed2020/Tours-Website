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
                 <p className="Tour-subscribe-p">This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                 <button className="btn btn-primary" id="Subscribe-btn">Subscribe</button>
            

             </div>
        </div>
    );
};

export default HomeOtherSection;