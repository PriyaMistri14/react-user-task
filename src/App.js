import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react';
import Users from './components/users/users.component';

import { Route, Routes } from 'react-router-dom';
import Posts from './components/posts/posts.component';










function App() {


  const [users, setUsers] = useState([])



  useEffect(() => {

    const fetchUsers = async ()=>{
      const usersData = await fetch("https://jsonplaceholder.typicode.com/users")
      const user = await usersData.json()
      console.log("User data in use effect", usersData, user);
      setUsers(user)
    }
  fetchUsers()
  

  }, [])


  console.log("users",users);
  return (
    // <div className="main-container" >
      <Routes>

      <Route path='/' element={ <Users users={users} />} />
      <Route path=':userId'  element={<Posts /> }/>

      


      </Routes>
      
      
      // {/* <Users users={users} /> */}



    // </div>
  );
}

export default App;
