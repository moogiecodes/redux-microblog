import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardTitle, CardText, Badge } from 'reactstrap';
import PostForm from './PostForm';
import CommentsList from './CommentsList';
import { useSelector, useDispatch } from 'react-redux';
import { removePost } from './actions';

function PostDetails() {

  const posts = useSelector(st => st.posts);
  const { postId } = useParams();
  const currPost = posts[postId];
  const dispatch = useDispatch();
  const history = useHistory();
  const [isEditing, setIsEditing] = useState(false);

  if (!currPost) {
    history.push('/');
  }
  
  const deletePost = () => {
    dispatch(removePost(postId));
    // NG - 03/12/20 - 5:39 PM added history.push('/') to redirect
    // after deleting post
    history.push('/');
  }

  let postDetails;
  if (currPost) {
    postDetails = (
      <div>
        <Card className="text-left" >
          <CardHeader className="text-left">{currPost.title}</CardHeader>
          <CardBody>
            <CardTitle className="text-left">{currPost.description}</CardTitle>
            <CardText className="text-left">{currPost.body}</CardText>
            <Badge onClick={() => setIsEditing(!isEditing)} color="primary">Edit</Badge>
            <Badge onClick={deletePost} color="danger">Delete</Badge>
          </CardBody>
        </Card>
        <CommentsList postId={postId} currPost={currPost} />
      </div>
    )
  } else {
    postDetails = null;
  }

  return (
    <div>
      {isEditing ?
        <PostForm isEditing={isEditing}
          setIsEditing={setIsEditing}
          currPost={currPost}
          id={postId} /> :
        postDetails
      }
    </div>

  )
}

export default PostDetails;