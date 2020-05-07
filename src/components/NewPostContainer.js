import React from 'react';
import PostForm from './PostForm';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { sendPostToAPI } from '../actions/actions';

function NewPostContainer() {
  const dispatch = useDispatch();
  const history = useHistory();

  /** Adds post and saves to backend. 
   * SAVE button (add new post)
  */

  const newPost = ({ title, description, body }) => {
    dispatch(sendPostToAPI(title, description, body));
    history.push('/');
  }

  return (
    <PostForm add={newPost} />
  );
}

export default NewPostContainer;