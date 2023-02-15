import  {BrowserRouter as Router, Routes,Route,Link}  from 'react-router-dom'
import  {Home} from './pages/Home'
import Sidebar from './components/Sidebar'
import  {CreatePost} from './pages/CreatePost'
import {Login} from './pages/Login'
import './App.css'
import { useState } from 'react'


function App() {

  const[isAuth,setIsAuth]=useState(localStorage.getItem("isAuth"));

  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  )
}

export default App
