import React from 'react';
import { Link } from 'react-router-dom';
import'./Service.css';

const Service = (props) => {
    const{name,img,description,Price} =props.service;
    return (
    <div className="Service-container">
        <div className="card" >
            <img src={img} className="card-img-top " alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">Tour Price: {Price}</p>
                   
            {/* <Link to = {`/DisplayDetails/${id}`}> */}
                <button href="#" className="btn btn-outline-primary">Book Now</button>
                {/* </Link> */}
                </div>
        </div>
</div>
    );
};

export default Service;