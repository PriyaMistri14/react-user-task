import './post-cart.styles.css'

const PostCart = (props)=>{
    const {post} =  props
    return (
         <div className='post-cart-container' >
    <h1>{post.title}</h1>
    <p>{post.body}</p>
    
    </div>
    )

}

export default PostCart
