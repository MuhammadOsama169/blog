import React, { useEffect } from 'react';
import { useState } from 'react';
import {addDoc , collection} from 'firebase/firestore';
import { db ,auth} from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import { MainContainer,InnerContainer,Title,Input,Button,PostContainer,Container,StyledTextarea } from '../components/styles/CreatePost.styled';

export const CreatePost = ({isAuth}) => {
  let navigate = useNavigate();

  const [title, setTitle] =useState("");
  const [postText, setPostText] =useState("");

  const postsCollectionRef = collection(db,"posts")

  const createPost = async ()=>{
    await addDoc(postsCollectionRef,{ 
      title,
      postText, 
      author: {name:auth.currentUser.displayName , id:auth.currentUser.uid}

    })
    navigate("/")
  }

  useEffect(()=>{
    if (!isAuth){
      navigate("/")
    }
  }, [])

  return (
    <MainContainer>
      <InnerContainer>
        <Container>
          <Title>Create A Post</Title>
          <Input 
          placeholder="Title Goes Here..." 
          onChange={(event) =>{setTitle(event.target.value)}}
          />
        </Container>

        <PostContainer>
          <StyledTextarea 
          placeholder="Write Something Here..." 
          onChange={(event) =>{setPostText(event.target.value)}}
          />
        </PostContainer>
        <Button onClick={createPost}>Submit Post</Button>
      </InnerContainer>
    </MainContainer>
  );
};
