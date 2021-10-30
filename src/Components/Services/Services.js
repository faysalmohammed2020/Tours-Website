import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import'./Services.css';

const Services = () => {
    const[services,setServices] =useState([]);
       useEffect(()=>
       fetch('./docdata.json')
       .then(res => res.json())
       .then(data => setServices(data))
       ,[])
    return (
        <div>
            <h1 className="text-center">Our Tour Packeges</h1>
        <div className ="service-container">
            
            <div className="service">
            {
                services.map(service => <Service
                service={service}></Service>)
            }
            </div>
        </div>
    </div>
    );
};

export default Services;