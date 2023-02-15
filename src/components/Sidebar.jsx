import React,{useState} from 'react';
import {signOut} from 'firebase/auth'
import {auth} from '../firebase-config'
import { SidebarContainer, SidebarLink} from './styles/Sidebar.styled';

function Sidebar() {
  const[isAuth,setIsAuth]=useState(localStorage.getItem("isAuth"));

  const signUserOut =()=>{
    signOut(auth)
    localStorage.clear()
    setIsAuth(false)
    window.location.pathname ="/login"
  };

  return (
    <SidebarContainer >
      <SidebarLink to='/'>Home</SidebarLink>
        <SidebarLink to='/createpost'>post</SidebarLink>
        {!isAuth ? 
        <>
          <SidebarLink to='/login'>login</SidebarLink> 
        </> 
        : <button onClick={signUserOut}>Log OUt</button>}
    </SidebarContainer>
  )
}

export default Sidebar