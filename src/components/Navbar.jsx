import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {signOut} from 'firebase/auth'
import {auth} from '../firebase-config'
import { NavbarWrapper,InnerContainer, NavLink,NavbarLinkExtended,ExtendedWrapper,NavbarLinkContainer,HamburgerButton,OuterContainer} from './styles/Navbar.styled';

function Sidebar() {
  const[isAuth,setIsAuth]=useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth)
    localStorage.clear()
    setIsAuth(false)
    window.location.pathname ="/login"
  };

  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarWrapper extendNavbar={extendNavbar} >
      <InnerContainer>
        <NavbarLinkContainer>
          <NavLink to='/'whileHover={{ scale: 1.1 }}whileTap={{ scale: 0.9 }}>
            Home
          </NavLink>
          <NavLink to='/createpost'whileHover={{ scale: 1.1 }}whileTap={{ scale: 0.9 }}>
            Create Post
          </NavLink>
          {/* DIsplay Logout btn when signed in */}
          {!isAuth ? 

            <NavLink onClick={signUserOut}>Log Out </NavLink>
            : 
            <>
            <NavLink to='/login'whileHover={{ scale: 1.1 }}whileTap={{ scale: 0.9 }}>
              Log In
            </NavLink> 
          </> 
          }
          {/* End */}
            <HamburgerButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </HamburgerButton>
          </NavbarLinkContainer>
        </InnerContainer>

        {extendNavbar && (
          <ExtendedWrapper>
            <OuterContainer>
              <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
              <NavbarLinkExtended to="/createpost">Create Post </NavbarLinkExtended>
              {/* DIsplay Logout btn when signed in */}
              {!isAuth ? 
                <>
                  <NavbarLinkExtended to='/login'whileHover={{ scale: 1.1 }}whileTap={{ scale: 0.9 }}>
                    Login
                  </NavbarLinkExtended> 
                </> 
                : <NavbarLinkExtended onClick={signUserOut}>Log Out </NavbarLinkExtended>
              }
              {/* End */}
            </OuterContainer>
          </ExtendedWrapper>
        )}
    </NavbarWrapper>
    
  )
}

export default Sidebar