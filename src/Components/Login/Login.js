
import { Button, Form } from 'react-bootstrap';

import'./Login.css';

import { getAuth, signInWithPopup,GoogleAuthProvider} from "firebase/auth";
import initializeAuthentication from '../../Firebase/firebase.initialize';
import { useState } from 'react';


initializeAuthentication();
const provider = new GoogleAuthProvider();
const Login = () => {
    const[user,setUser] =useState({})
     const handleGoogleSignIn = () =>{
        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then((result) =>{
            const{displayName,email} = result.user;
            const loggeduser ={
                name: displayName,
                mail: email
            }
          setUser(loggeduser);
        })
    }

    const handlelogin = e =>{
         e.preventDefault();
    }
    return (

       <div className="login-container">
           
       

           <div className ="login-img">
           
           </div> 
    <div className="login-form">
    
<Form onSubmit ={handlelogin}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
   <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
   <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit" id="Submit-btn">
    Login
  </Button> or
  <Button variant="primary" type="submit" id="login-btn-google" onClick ={handleGoogleSignIn}>
    Login with google
  </Button>
  
  
</Form>


  <br/>
        {
            user.email && <div>
           <h2>Welcom {user.name}</h2>
       
       </div>
       }
       </div>
       </div>
       
       

       
       
    );
};

 export default Login;