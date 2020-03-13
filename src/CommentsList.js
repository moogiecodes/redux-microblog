import React from 'react';
import CommentForm from './CommentForm';
import { ListGroup } from 'reactstrap';
import CommentItem from './CommentItem';
import { useDispatch } from 'react-redux';
import { addComment, removeComment } from './actions';

function CommentsList({ postId, currPost }) {
  const dispatch = useDispatch();

  const commentIds = Object.keys(currPost.comments);
  const comments = commentIds.map(cId =>
    <CommentItem
      postId={currPost.id}
      key={cId}
      commentId={cId}
      commentText={currPost.comments[cId].text}
      removeComment={deleteComment} />
  );

  //UPDATE COMMENT button 
  const updateComments = (fData) => {
    dispatch(addComment(fData, postId));
  }

  const deleteComment = (commentId) => {
    dispatch(removeComment(postId, commentId));
  }

  return (
    <div>
      <h1>Comments</h1>
      <ListGroup>
        {comments}
      </ListGroup>
      <CommentForm updateComments={updateComments} />
    </div>
  );
}

export default CommentsList;