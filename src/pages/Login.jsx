import React from 'react';
import {auth, provider} from '../firebase-config'
import {signInWithPopup} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { MainContainer,ImageContainer,InnerContainer,GoogleButton,Text } from '../components/styles/Login.styled';

export const Login = ({setIsAuth}) => {
  let navigate =useNavigate();

  const signInWithGoogle =()=>{
    signInWithPopup(auth,provider).then((result)=>{
      localStorage.setItem("isAuth",true);
      setIsAuth(true);
      navigate("/")
    })
  }
  return (
    <MainContainer>
      <ImageContainer>
        <InnerContainer>
          <Text>Sign In With Google to Continue</Text>
          <GoogleButton onClick={signInWithGoogle}>
            Sign in With Google
          </GoogleButton>
        </InnerContainer>
      </ImageContainer>
    </MainContainer>
  );
};
