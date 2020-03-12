import React from 'react';
import { ListGroupItem, Button } from 'reactstrap';

function CommentItem({ deleteComment, commentText, commentId }) {
  const handleDelete = () => {
    deleteComment(commentId);
  }

  return (
    <ListGroupItem className="text-left">
      <Button size="sm" onClick={handleDelete}>X</Button> {''}
      {commentText}
    </ListGroupItem>
  )
}

export default CommentItem;