import React from 'react';
import { ListGroupItem, Button } from 'reactstrap';

function CommentItem({ removeComment, postId, comment }) {
  const {text, id} = comment;
  const handleRemove = () => {
    removeComment(postId, id);
  }
  return (
    <ListGroupItem className="text-left"> 
      <Button size="sm" onClick={handleRemove}>X</Button> {''}
      {text}
    </ListGroupItem>
  )
}

export default CommentItem;