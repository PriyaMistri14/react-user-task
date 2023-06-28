import React from 'react'

import { useParams } from 'react-router-dom'

import { useState, useEffect } from 'react'

import CommentCart from '../comment-cart/comment-cart.component'

import './comments.styles.css'

import SearchBox from '../search-box/search-box.component'

import Pagination from '../pagination/pagination.component'



const Comments = () => {

    const { postId } = useParams()
    const [comments, setComments] = useState([])
    const [filteredComments, setFilteredComments] = useState([])


    const [currentPage, setCurrentPage] = useState(1)
    const [dataPerPage] = useState(5)


    const lastDataIndex = currentPage * dataPerPage
    const firstDataIndex = lastDataIndex - dataPerPage

    var currentData = filteredComments.slice(firstDataIndex, lastDataIndex)


    const onPageChange = (num) => setCurrentPage(num)
    const onPrevPage = () => setCurrentPage(currentPage - 1)
    const onNextPage = () => setCurrentPage(currentPage + 1)



    const onSearchChange = (event) => {

        var search_text = event.target.value.toLocaleLowerCase()

        var newComments = comments.filter((comment) => {
            return comment.name.toLocaleLowerCase().includes(search_text)

        })
        setFilteredComments(newComments)
        setCurrentPage(1)


    }






    useEffect(() => {

        const fetchComment = async () => {

            const commentsData = await fetch('https://jsonplaceholder.typicode.com/comments')

            const comments = await commentsData.json()

            const filteredComments = comments.filter((comment) => { return comment.postId == postId })

            setComments(filteredComments)
            setFilteredComments(filteredComments)

        }

        fetchComment()

    }, [])


    return (
        <div>
            <SearchBox onChangeHandler={onSearchChange} />
            {currentData.length != 0 ?
                currentData.map((comment) => <CommentCart comment={comment} />)
                : "NOT FOUND!!"
            }

            {
                currentPage != 1 ? <p className='prev' onClick={onPrevPage}>Prev</p> : ""
            }
            <Pagination dataPerPage={dataPerPage} totalData={filteredComments.length} onPageChangeHandler={onPageChange} />
            {
                currentPage != Math.ceil(filteredComments.length / dataPerPage) ? <p className='prev' onClick={onNextPage}>Next</p> : ""
            }

        </div>
    )
}

export default Comments
