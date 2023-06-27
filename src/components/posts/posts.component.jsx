
import './posts.styles.css'

import PostCart from '../post-cart/post-cart.component'

import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Posts = ()=>{

    const {userId} = useParams()
    const [posts, setPosts] = useState([])


    useEffect(()=>{       



        const fetchPost =  async ()=>{
            console.log("in fetch post user id ", userId );
        
            const postsData = await fetch("https://jsonplaceholder.typicode.com/posts") 
            
            const posts = await postsData.json()
            console.log("userid", userId);
            console.log("postttt", posts);
             
            const filteredPosts = posts.filter((post)=>{return  post.userId == userId})
            console.log("filteredPosts",filteredPosts);
            setPosts(filteredPosts)       
        
        
        }

        fetchPost()


    },[])



    return (
        posts.map((post)=><PostCart post={post}/>)
    )
}

export default Posts
