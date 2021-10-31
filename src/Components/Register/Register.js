import React from 'react';
import { Button } from 'react-bootstrap';
import'./Register.css';
import { getAuth} from "firebase/auth";
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';


 


 const Register = () => {

    
   const auth = getAuth();
    const {signInWithGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from  || '/Home';
    console.log('came from',location.state?.from);
    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then((result) =>{
            history.push(redirect_url)
            })
            
              
    }
    

    return (
        <div className="register-container">
           <h1 className="register-h1">Welcome TO SB Tour And Travels Portal</h1>
    <div className="register-form">

<Button variant="danger" type="submit" id="login-btn-google" onClick ={handleGoogleSignIn}>
    Login with google
  </Button>
       </div>
       </div>
    );
};

export default Register;