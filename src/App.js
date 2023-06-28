
import './App.css';

import Users from './components/users/users.component';

import { Route, Routes } from 'react-router-dom';
import Posts from './components/posts/posts.component';

import Comments from './components/comments/comments.component';



function App() {

  return (
 
      <Routes>

      <Route path='/' element={ <Users />} />
      <Route path='/post/:userId'  element={<Posts /> }/>
      <Route path='/comment/:postId'  element={<Comments /> }/>    


      </Routes>     
      
     
  );
}

export default App;
