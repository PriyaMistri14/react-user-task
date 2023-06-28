
import React from 'react'

import './search-box.styles.css'


const SearchBox = (props) => {
  return (<div className='search-container'>
    <input className='search' type='search' placeholder = 'search here!' onChange={props.onChangeHandler}/></div>
  )
}

export default SearchBox


