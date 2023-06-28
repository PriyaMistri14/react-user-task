import './user-cart.styles.css'

import { useNavigate } from 'react-router-dom';


const UserCart = (props) => {

    const navigate = useNavigate()

    const goToPost = (userId) => {
        console.log("in navigate", userId);
        navigate(`/post/${userId}`)
    }

    const { user } = props

    return (


        <div className='user-cart-container' onClick={() => goToPost(user.id)}>
         
            <h1>Name : {user.name}</h1>
            <p>User Name : {user.username}</p>
            <p>Email : {user.email}</p>
            <p>Phone : {user.phone}</p>
            <p>Website :  {user.website}</p>
            <p>Address : <p>City :{user.address.city}</p>
                 <p>Street :{user.address.street}</p>
                 <p>Suite :{user.address.suite}</p>
                 <p>Zipcode :{user.address.zipcode}</p>
                 <p>Geo :
                    <p>Lat : {user.address.geo.lat}</p>
                    <p>Lng : {user.address.geo.lng}</p>
                 </p>


            </p>
        </div>
    )



}






export default UserCart