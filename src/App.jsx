import  {BrowserRouter as Router, Routes,Route,Link}  from 'react-router-dom'
import  {Home} from './pages/Home'
import  {CreatePost} from './pages/CreatePost'
import {Login} from './pages/Login'
import './App.css'
import { useState } from 'react'

function App() {
  const[isAuth,setIsAuth]=useState(false);
  return (
    <Router>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/createpost'>post</Link>
        <Link to='/login'>login</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/createpost' element={<CreatePost/>}></Route>
        <Route path='/login' element={<Login setIsAuth={setIsAuth} />}></Route>
      </Routes>
    </Router>
  )
}

export default App
