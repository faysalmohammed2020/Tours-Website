import React from 'react';
import img from '../../images/notfound.jpg';
import './Notfound.css'

const Notfound = () => {
    return (
        <div className="notfound-img">
            <img src={img} alt="404"/>
        </div>
    );
};

export default Notfound;