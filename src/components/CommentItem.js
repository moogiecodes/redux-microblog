import React from 'react';
import { ListGroupItem, Button } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { removeCommentFromAPI } from '../actions/actions';

function CommentItem({ postId, commentText, commentId }) {
  const cmtItemContainer = {
    margin: 'auto',
    padding: '1em auto',
    width: '50%'
  }

  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeCommentFromAPI(postId, commentId));
  }

  return (
    <ListGroupItem className="text-left" style={cmtItemContainer}>
      <Button close size='sm' onClick={handleDelete} aria-label="Delete comment"></Button> {''}
      {commentText}
    </ListGroupItem>
  )
}

export default CommentItem;