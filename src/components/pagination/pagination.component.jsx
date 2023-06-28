import React from 'react'

import './pagination.styles.css'

const Pagination = (props) => {
    const { dataPerPage, totalData, onPageChangeHandler } = props
    const pageNumbers = []
    const num = Math.ceil(totalData / dataPerPage)

    for (var i = 1; i <= num; i++) {
        pageNumbers.push(i)
    }

    return (
        <div className='pagination-container'>
            <ul>
                {
                    pageNumbers.map((n) => <li><a onClick={()=>onPageChangeHandler(n)} >{n}</a></li>)
                }

            </ul>
        </div>
    )
}

export default Pagination
