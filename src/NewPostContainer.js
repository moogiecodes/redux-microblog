import React from 'react';
import PostForm from './PostForm';
import { useSelector } from 'react-redux';

function NewPostContainer() {
  const posts = useSelector(st => st.posts);

  return (

    <PostForm/>
  )

}