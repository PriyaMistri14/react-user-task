
import './users.styles.css'


import UserCart from '../user-cart/user-cart.component';


// import { Route, Routes } from 'react-router-dom';

const Users = (props)=>{
    console.log("in component props and users",props);
    const {users} = props
    return (
        
        users.map((user)=><div className='users-container'><UserCart user={user} /></div>)
        
        
        
    )
        
    
}


export default Users