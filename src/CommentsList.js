import React from 'react';
import CommentForm from './CommentForm';
import { ListGroup } from 'reactstrap';
import CommentItem from './CommentItem';
import { v4 as uuid } from 'uuid';

function CommentsList({ currPost, updateComments }) {
  const comments = currPost.comments.map(c =>
    <CommentItem postId={currPost.id} comment={c} />

  );

  const addComment = (fData) => {
    console.log("IN ADD COMMENT METHOD OF COMMENTS LIST...Form data is..", fData);
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