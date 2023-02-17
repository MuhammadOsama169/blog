import React, {useEffect, useState} from 'react';
import {getDocs , collection, deleteDoc, doc} from 'firebase/firestore';
import {db, auth} from '../firebase-config'
import { MainContainer,InnerContainer,Title,Body,Author,DeletePost ,ImageContainer} from '../components/styles/Home.styled';

export const Home = ({isAuth}) => {
  const [postLists, setPostList] =useState([]);
  const postsCollectionRef = collection(db,"posts")

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };
  
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, [deletePost]);

  return (
    <MainContainer>
    <ImageContainer/>
      {postLists.map((post) =>{
      return (
        <InnerContainer>
          <div>
            <Title>
              {post.title}
            </Title>

            {isAuth && post.author.id === auth.currentUser.uid && (
              <DeletePost
                onClick={() => {
                deletePost(post.id);
                }}>
                X
                </DeletePost>
            )}
            <Body >{post.postText}</Body>
            <Author>@{post.author.name}</Author>
          </div>
        </InnerContainer>
      )
    })}
    </MainContainer>
  )
};
