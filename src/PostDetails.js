import React from 'react';
import { useParams, useHistory, Redirect } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardTitle, CardText, Badge } from 'reactstrap';
import PostForm from './PostForm';
import CommentsList from './CommentsList';

function PostDetails({ posts, isEditing, setIsEditing, updatePost, deletePost, updateComments, removeComment }) {
  const { postId } = useParams();
  const currPost = posts.filter(p => p.id === postId)[0];
  const history = useHistory();
  
  if(!currPost) {
    history.push('/');
  }
  // EDIT button method 
  const editPost = () => {
    setIsEditing(true);
  }

  const deleteButton = () => {
    deletePost(postId);
    history.push('/');
  }

  //**EDIT BADGE ON CLICK, doesn't seem to like onClick */
  let jsxDetails;
  if (currPost) {
  jsxDetails = (
    <div>
      <Card className="text-left" >
        <CardHeader className="text-left">{currPost.title}</CardHeader>
        <CardBody>
          <CardTitle className="text-left">{currPost.description}</CardTitle>
          <CardText className="text-left">{currPost.body}</CardText>
          <Badge onClick={editPost} color="primary">Edit</Badge>
          <Badge onClick={deleteButton} color="danger">Delete</Badge>
        </CardBody>
      </Card>
      <CommentsList 
        currPost={currPost} 
        updateComments={updateComments} 
        removeComment={removeComment} />
    </div>
    )
  } else {
    jsxDetails = null;
  }
  return (
    <div>
      {isEditing ?
        <PostForm isEditing={isEditing}
          updatePost={updatePost}
          deletePost={deletePost}
          currPost={currPost}
          id={postId} /> :
        jsxDetails
      }
    </div>

  )
}

export default PostDetails;