import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardTitle, CardText, Badge } from 'reactstrap';
import PostForm from './PostForm';
import CommentsList from './CommentsList';
import { useSelector, useDispatch } from 'react-redux';
import { removePost } from './actions';

function PostDetails() {

  console.log("IN POST DETAILS COMPONENT");

  const posts = useSelector(st => st.posts);
  const { postId } = useParams();
  const currPost = posts[postId];
  const dispatch = useDispatch();
  const history = useHistory();
  const [isEditing, setIsEditing] = useState(false);

  if (!currPost) {
    history.push('/');
  }

  // DELETE button method 
  const deletePost = (id) => {
    dispatch(removePost(id));
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