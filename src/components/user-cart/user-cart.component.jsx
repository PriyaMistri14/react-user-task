

import './user-cart.styles.css'

import { useState } from 'react';

import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';





const UserCart = (props)=>{

    const navigate = useNavigate()

    const goToPost=(userId)=>{
        console.log("in navigate", userId);
        navigate(`/${userId}`)
    }
    

  

    const {user} = props

    console.log(">>>>>user ",user);






    return (
    
        
        <div className='user-cart-container' onClick={()=>goToPost(user.id)}>
            {/* <Link to={user}>Click</Link> */}
        <h1>{user.name}</h1>
        <Link to={user.id}>{user.id}</Link>
        <p>{user.username}</p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <p>{user.website}</p>
        </div>
    )
    
     

}






export default UserCart