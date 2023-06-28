import React from 'react'

import './comment-cart.styles.css'

const CommentCart = (props) => {
 
    const {comment} = props

  return (
    <div className='comment-cart-container'  >
    <h1>Name :  {comment.name}</h1>
    <p>Email : {comment.email}</p>
    <p>Body : {comment.body}</p>
    
    </div>
  )
}

export default CommentCart
