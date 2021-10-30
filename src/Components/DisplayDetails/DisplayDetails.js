import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import './DisplayDetails.css';


const DisplayDetails = () => {
    const {detailsid} = useParams();
    const[docDetails,setdocDetails] =useState([]);
    const[singleDetails,setSingleDetails] =useState([]);
    useEffect(()=>{
        fetch('/docdata.json')
        .then(res => res.json())
        .then(data => setdocDetails(data))
    },[])

    useEffect(()=>{
       const foundDetails= docDetails.find(service => service.id === detailsid )
       setSingleDetails(foundDetails);
    },[docDetails])
    return (
        <div className="Details-container">

                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={singleDetails?.img} />
                <Card.Body>
                    <Card.Title>ID No:{singleDetails?.id}</Card.Title>
                    <Card.Title>Name:{singleDetails?.name}</Card.Title>
                    <Card.Text>
                            <p>Role:{singleDetails?.role}</p>
                    </Card.Text>
                    <Card.Text>
                            <p>{singleDetails?.description}</p>
                    </Card.Text>
                    
                </Card.Body>
                </Card>
            
           
        </div>
    );
};

export default DisplayDetails;