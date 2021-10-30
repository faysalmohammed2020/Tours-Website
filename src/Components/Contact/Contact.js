import React from 'react';
import contactimg from '../../images/contact.jpg';
import './Contact.css'
import { Button, Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            <div className="contact-container">
            <div className ="contact-img">
            <img src ={contactimg} alt="Logo"/>
           </div> 
            <div className="contact-form">
    <h1 className="text-primary">Contact Us</h1>
    <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
    
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1"/>
    
    <Form.Control as="textarea" rows={3} placeholder="Message"/>
      <Button variant="primary" type="submit" id="Submit-btn">
        Message
      </Button>
      
      
      
    </Form>
            
        </div>
        </div>
        </div>
    );
};

export default Contact;