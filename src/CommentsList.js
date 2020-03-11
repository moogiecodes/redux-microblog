import React from 'react';
import CommentForm from './CommentForm';
import uuid from 'uuid';

function CommentsList({ currPost, updateComments }) {
  const comments = currPost.comments;

  const addComment = (fData) => {
    let newComment = { ...fData, id: uuid() }
    updateComments(newComment, currPost.id);
  }

  return (
    <div>
      <h1>Comments</h1>
      <CommentForm addComment={addComment} />
    </div>
  );
}

export default CommentsList;