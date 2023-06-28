
import './users.styles.css'


import UserCart from '../user-cart/user-cart.component';
import { useState, useEffect } from 'react';
import SearchBox from '../search-box/search-box.component';

import Pagination from '../pagination/pagination.component';



const Users = ()=>{


    const [users, setUsers] = useState([])
    const [filteredUsers, setFilteredUsers] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [dataPerPage] = useState(5)    
    

    const lastDataIndex = currentPage * dataPerPage
    const firstDataIndex = lastDataIndex - dataPerPage

    var currentData = filteredUsers.slice(firstDataIndex, lastDataIndex)
   

    const onPageChange= (num)=> setCurrentPage(num) 


    const onSearchChange = (event)=>{
        var search_text = event.target.value.toLocaleLowerCase()
        var newUsers = users.filter((user) => {
            return user.name.toLocaleLowerCase().includes(search_text)      
          })
          setFilteredUsers(newUsers)
          setCurrentPage(1)
     
      
    }



    useEffect(() => {
  
      const fetchUsers = async ()=>{
        const usersData = await fetch("https://jsonplaceholder.typicode.com/users")
        const user = await usersData.json()       
        setUsers(user)
        setFilteredUsers(user)
               
        
      }
    fetchUsers()    
  
    }, [])
  

   
    




   
    // const {users} = props
    return (
        <div>
        <SearchBox onChangeHandler={onSearchChange} />
        { currentData.length != 0 ?
        currentData.map((user)=><div className='users-container'><UserCart user={user} /></div>)
        :"NOT FOUND!"
        }
        <Pagination  dataPerPage={dataPerPage} totalData={filteredUsers.length} onPageChangeHandler={onPageChange} />
     </div>   
    )
        
    
}


export default Users