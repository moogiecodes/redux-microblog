import React from 'react';
import CommentForm from './CommentForm';
import { ListGroup } from 'reactstrap';
import CommentItem from './CommentItem';
import uuid from 'uuid';

function CommentsList({ currPost, updateComments }) {
  const comments = currPost.comments.map(c => 

  );

  const addComment = (fData) => {
    let newComment = { ...fData, id: uuid() }
    updateComments(newComment, currPost.id);
  }

  return (
    <div>
      <h1>Comments</h1>
      <ListGroup>
        {comments}
      </ListGroup>
      <CommentForm addComment={addComment} />
    </div>
  );
}

export default CommentsList;