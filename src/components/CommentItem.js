import React from 'react';
import { ListGroupItem, Button } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { removeCommentFromAPI } from '../actions/actions';

function CommentItem({ postId, commentText, commentId }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeCommentFromAPI(postId, commentId));
  }

  // const deleteComment = (commentId) => {
  //   dispatch(removeCommentFromAPI(postId, commentId));
  // }

  return (
    <ListGroupItem className="text-left">
      <Button size="sm" onClick={handleDelete}>X</Button> {''}
      {commentText}
    </ListGroupItem>
  )
}

export default CommentItem;