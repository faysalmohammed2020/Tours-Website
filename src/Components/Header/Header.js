import React from 'react';
import'./Header.css';
import logo from '../../images/logo.png'
import {    NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';




const Header = () => {
    const {user , logOut} = useAuth();
    
    
    return (
        <div>
            
        <div className = "Header">
        <div className="logo">
            <img src={logo} alt="logo" />
            </div>
           <div className="Header-nav">
           <NavLink activeStyle={{
       fontWeight: "bold",
       color: "white",
       background: 'aqua',
       padding:'10px',
       borderRadius:'10px'
       }}
        to="/Home">Home</NavLink>
            <NavLink activeStyle={{
       fontWeight: "bold",
       color: "white",
       background: 'aqua',
       padding:'10px',
       borderRadius:'10px'
       }}
        to="/About">About</NavLink>
            <NavLink activeStyle={{
       fontWeight: "bold",
       color: "white",
       background: 'aqua',
       padding:'10px',
       borderRadius:'10px'
       }}
       to="/Contact">Contact</NavLink>

       {user.email?<NavLink activeStyle={{
            fontWeight: "bold",
            color: "white",
            background: 'aqua',
            padding:'10px',
            borderRadius:'10px'
            }}
             to="/MyOrder">My Order</NavLink> :"" }
       {user.email?<NavLink activeStyle={{
            fontWeight: "bold",
            color: "white",
            background: 'aqua',
            padding:'10px',
            borderRadius:'10px'
            }}
             to="/ManageOrder">Manage All Order</NavLink> :"" }
       {user.email?<NavLink activeStyle={{
            fontWeight: "bold",
            color: "white",
            background: 'aqua',
            padding:'10px',
            borderRadius:'10px'
            }}
             to="/addService">Add Service</NavLink> :"" }
        
        
        <span className="Displayname">{user.displayName}</span>
        <img src={user.photoURL} className="userimg"/>
       
        

        

         {user.email ?
            
        
        
         <NavLink activeStyle={{
       fontWeight: "bold",
       color: "white",
       background: 'aqua',
       padding:'10px',
       borderRadius:'10px'
       }}
        to="/Register" onClick={logOut}>LogOut</NavLink>  
        : <NavLink activeStyle={{
       fontWeight: "bold",
       color: "white",
       background: 'aqua',
       padding:'10px',
       borderRadius:'10px'
       }}
        to="/Register">Login</NavLink> 
        } 
      </div> 
    </div>
</div>

    );
};

export default Header;