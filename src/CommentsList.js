import React from 'react';
import { ListGroup } from 'reactstrap';
import CommentItem from './CommentItem';
import { useDispatch } from 'react-redux';
import {  removeComment } from './actions';

function CommentsList({ postId, currPost }) {
  const dispatch = useDispatch();

  const deleteComment = (commentId) => {
    dispatch(removeComment(postId, commentId));
  }

  // const commentIds = Object.keys(currPost.comments);
  console.log("currPost", currPost);

  const comments = currPost.comments.map(c =>
    <CommentItem
      postId={postId}
      key={c.id}
      commentId={c.id}
      commentText={c.text}
      removeComment={deleteComment} />
  );

  //UPDATE COMMENT button 
  


  return (
    <div>
      <h1>Comments</h1>
      <ListGroup>
        {comments}
      </ListGroup>
      
    </div>
  );
}

export default CommentsList;