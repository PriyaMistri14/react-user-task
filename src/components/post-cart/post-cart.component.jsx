import './post-cart.styles.css'
import { useNavigate } from 'react-router-dom'


const PostCart = (props)=>{
    const {post} =  props


    const navigate = useNavigate()

    const goToComment=(postId)=>{
      
        navigate(`/comment/${postId}`)
    }

    return (
         <div className='post-cart-container' onClick={()=>goToComment(post.id)} >
    <h1>Title : {post.title}</h1>
    <p>Body : {post.body}</p>
    
    </div>
    )

}

export default PostCart
