import React from 'react';
import { Link } from 'react-router-dom';
import'./Service.css';

const Service = (props) => {
    const{id,name,role,img} =props.service;
    return (
    <div className="Service-container">
        <div className="card" >
            <img src={img} className="card-img-top " alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{role}</p>
                   
            <Link to = {`/DisplayDetails/${id}`}>
                <button href="#" className="btn btn-danger">Appointment Now</button>
                </Link>
                </div>
        </div>
</div>
    );
};

export default Service;