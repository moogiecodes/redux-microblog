import React, { useState } from 'react';
import PostForm from './PostForm';
import { useParams } from 'react-router-dom';

function PostDetails({ isEditing, setIsEditing }) {
  setIsEditing(true);
  let jsx = (
    <div>
      
    </div>
  )
  return (
    <div>Post Details...
      <PostForm isEditing={isEditing} />
    </div>

  )
}

export default PostDetails;