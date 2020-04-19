import React from 'react';
import { ListGroupItem, Button } from 'reactstrap';
import { useDispatch } from 'react-redux';
import {  removeComment } from './actions';

function CommentItem({ postId, deleteComment, commentText, commentId }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeComment(postId, commentId));
  }

  return (
    <ListGroupItem className="text-left">
      <Button size="sm" onClick={handleDelete}>X</Button> {''}
      {commentText}
    </ListGroupItem>
  )
}

export default CommentItem;