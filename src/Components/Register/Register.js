import React from 'react';
import { Button, Form } from 'react-bootstrap';
import'./Register.css';
import regimg from '../../images/register.jpg';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";

import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';


 


 const Register = () => {

    const[email,setEmail] =useState('');
    const[password,setPassword] =useState('');
     const[isLogin,setIsLogin] =useState(false);
     const[error,setError] = useState('');
   const auth = getAuth();
    //  const handleGoogleSignIn = () =>{
        
        
          
        
    // }
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
    const togglelogin = e =>{
        setIsLogin(e.target.checked)
    }
    const handleEmailChange = e =>{
        setEmail(e.target.value)
    }
    const handlePasswordChange = e =>{
        setPassword(e.target.value)
    }

    const handleregistration = e =>{
        e.preventDefault();
        console.log(email,password);
        if(password.length<6){
            setError("Password Must be atleast 6 charatcer's Long")
            return;
        }
        
        createUserWithEmailAndPassword(auth,email,password)
        .then((result) => {
            const user = result.user;
            console.log(user);
            setError('');
            
        })
        .catch(error =>{
            setError(error.message);
        });
        
        
        
        
        isLogin? userLogin(email,password) : createNewUser(email,password);
        
    }
      const userLogin =(email,password)=>{
        
        signInWithEmailAndPassword(auth,email,password)
        .then((result) => {
            const user = result.user;
            console.log(user);
            
        })
     }
    
    const createNewUser = (email,password)=>{    
    createUserWithEmailAndPassword(auth,email,password)
    .then((result) => {
        const user = result.user;
        console.log(user);
        setError('');
        
    })
    .catch(error =>{
        setError(error.message);
    });
}
    return (
        <div className="register-container">
           <div className ="register-img">
            <img src ={regimg}  alt=""/>
           </div>
    <div className="register-form">
<Form onSubmit={handleregistration}>
    <h3 className="text-white">Please {isLogin ? "Login" : "Register"}</h3>
  <Form.Group className="mb-3" controlId="formBasicEmail">
   <Form.Control type="email" placeholder="Enter email"  onBlur={handleEmailChange}/>
    </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
   <Form.Control type="password" placeholder="Password" onBlur={handlePasswordChange}/>
  </Form.Group>
  <Form.Group  className="mb-3" controlId="formBasicCheckbox">
    <Form.Check onChange={togglelogin} type="checkbox" label="Already Registered? " />
  </Form.Group>
  <div className="error text-danger">{error}</div>
  <Button variant="danger" type="submit" id="Submit-btn"  >
  {isLogin ? "Login" : "Register"}
  </Button>  or
   {/* <Button variant="danger" type="submit" id="login-btn-google" onClick ={signInWithGoogle}>
    Login with google
  </Button> */}

</Form>
<br/>
<Button variant="danger" type="submit" id="login-btn-google" onClick ={handleGoogleSignIn}>
    Login with google
  </Button>
       </div>
       </div>
    );
};

export default Register;