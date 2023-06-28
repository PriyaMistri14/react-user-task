
import './posts.styles.css'

import PostCart from '../post-cart/post-cart.component'

import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import SearchBox from '../search-box/search-box.component'

import Pagination from '../pagination/pagination.component'


const Posts = () => {

    const { userId } = useParams()
    const [posts, setPosts] = useState([])
    const [filteredPost, setFilteredPost] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [dataPerPage] = useState(5)


    const lastDataIndex = currentPage * dataPerPage
    const firstDataIndex = lastDataIndex - dataPerPage

    var currentData = filteredPost.slice(firstDataIndex, lastDataIndex)


    const onPageChange = (num) => setCurrentPage(num)
    const onPrevPage = () => setCurrentPage(currentPage - 1)
    const onNextPage = () => setCurrentPage(currentPage + 1)


    const onSearchChange = (event) => {

        var search_text = event.target.value.toLocaleLowerCase()

        var newPosts = posts.filter((post) => {
            return post.title.toLocaleLowerCase().includes(search_text)

        })
        setFilteredPost(newPosts)
        setCurrentPage(1)
        console.log(newPosts)

    }


    useEffect(() => {



        const fetchPost = async () => {
            console.log("in fetch post user id ", userId);

            const postsData = await fetch("https://jsonplaceholder.typicode.com/posts")

            const posts = await postsData.json()

            const filteredPosts = posts.filter((post) => { return post.userId == userId })

            setPosts(filteredPosts)
            setFilteredPost(filteredPosts)


        }

        fetchPost()


    }, [])



    return (
        <div>
            <SearchBox onChangeHandler={onSearchChange} />
            {
                currentData.length != 0 ?
                    currentData.map((post) => <PostCart post={post} />)
                    : "NOT FOUND!!"
            }

            {
                currentPage != 1 ? <p className='prev' onClick={onPrevPage}>Prev</p> : ""
            }
            <Pagination dataPerPage={dataPerPage} totalData={filteredPost.length} onPageChangeHandler={onPageChange} />
            {
                currentPage != Math.ceil(filteredPost.length / dataPerPage) ? <p className='prev' onClick={onNextPage}>Next</p> : ""
            }
        </div>
    )
}

export default Posts
