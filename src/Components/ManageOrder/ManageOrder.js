import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './ManageOrder.css'

const ManageOrder = () => {
    const{user}= useAuth()
    const[allOrders,setAllOrders]=useState([]);
    useEffect(()=>{
        fetch('https://grim-broomstick-26209.herokuapp.com/myOrders')
        .then(res => res.json())
        .then(data => setAllOrders(data))
    },[])
    const handleDelete = (id) =>{
        const proceed = window.confirm("Are you Want To Delete Order?")
        if(proceed){
        const url =`https://grim-broomstick-26209.herokuapp.com/myOrders/${id}`;
        fetch(url,{
            method :'DELETE',
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount){
                alert('Order SuccessFully Deleted');
                const remaining = allOrders.filter(allOrders => allOrders._id !== id);
            setAllOrders(remaining);
            }
        })
        }

    }
    return (
        <div>
            <h1 className="Manageallorder-h1 text-success">Manage Order:{allOrders.length}</h1>
            <div className="Manageallorder">
                 {
                   allOrders.map(allOrders =><div className="myodrers-container">
                   <div className="card" >
                       <img src={allOrders?.img} className="card-img-top " alt="" />
                           <div className="card-body">
                               <h5 className="card-title">{allOrders?.name}</h5>
                               <p className="card-text">{allOrders?.description}</p>
                               <p className="card-text">User: {allOrders?.email}</p>
                               <p className="card-text">Tour Price: {allOrders?.Price}</p>
                                <button href="#" className="btn btn-outline-danger" onClick={() => handleDelete(allOrders._id)} >Delete</button> 
                               
                      
                           </div>
                   </div>
           </div>)
                } 

            </div>
        </div>
    );
};

export default ManageOrder;