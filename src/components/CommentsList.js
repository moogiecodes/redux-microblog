import React from 'react';
import { ListGroup } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { sendCommentToAPI } from '../actions/actions';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';

function CommentsList({ postId, currPost }) {
  const cmtContainer = {
    margin: '10% auto'
  }
  const dispatch = useDispatch();
  const commentIds = Object.keys(currPost.comments);

  const comments = commentIds.map(cId =>
    <CommentItem
      postId={currPost.id}
      key={cId}
      commentId={currPost.comments[cId].id}
      commentText={currPost.comments[cId].text}
    />
  );

  /** Handle adding a comment: adds to backend. 
   * Called from Comment Form "Add" comment button
  */
  const updateComments = (fData) => {
    dispatch(sendCommentToAPI(postId, fData.text));
  }

  return (
    <div style={cmtContainer}>
      <h1>Comments</h1>
      <ListGroup>
        {comments}
      </ListGroup>
      <CommentForm updateComments={updateComments} currPost={currPost} />
    </div>
  );
}

export default CommentsList;