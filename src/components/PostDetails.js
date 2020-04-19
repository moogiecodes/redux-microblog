import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardTitle, CardText, Badge } from 'reactstrap';
import PostForm from './PostForm';
import CommentsList from './CommentsList';
import { useSelector, useDispatch } from 'react-redux';
import { removePost, addComment } from '../actions/actions';
import CommentForm from './CommentForm';

function PostDetails() {
  const [isEditing, setIsEditing] = useState(false);
  // const { postId } = useParams();
  const postId = Number(useParams().postId);
  const currPost = useSelector(st => st.posts[postId]);
  const dispatch = useDispatch();
  const history = useHistory();

  // const posts = useSelector(st => st.posts);
  console.log("from <postdetails> the curr post is...", currPost);
  // let currPost;
  // if (posts) {
  //   currPost = posts[postId];
  // }

  // if (!currPost) {
  //   history.push('/');
  // }
  const updateComments = (fData) => {
    dispatch(addComment(fData, postId));
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
        <CommentForm updateComments={updateComments} />
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