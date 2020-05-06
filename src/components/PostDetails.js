import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removePostFromAPI, getPostFromAPI } from '../actions/actions';
import { Card, CardHeader, CardBody, CardTitle, CardText, Badge } from 'reactstrap';
import PostForm from './PostForm';
import CommentsList from './CommentsList';

function PostDetails() {

  const [isEditing, setIsEditing] = useState(false);
  const postId = Number(useParams().postId);
  const currPost = useSelector(st => st.posts[postId]);
  const dispatch = useDispatch();
  const history = useHistory();

  /** Toggle editing on/off */

  function toggleEdit() {
    setIsEditing(edit => !edit);
  }

  /** If we don't have the post, request it from API. */

  useEffect(() => {
    async function getPost() {
      try {
        dispatch(getPostFromAPI(postId));
      }
      catch (err) {
        console.log(err);
      }
    }
    if (!currPost) {
      getPost();
    }
  }, [dispatch, currPost, postId]);

  /** Handle post deletion: deletes from backend. */

  function deletePost() {
    dispatch(removePostFromAPI(postId));
    history.push("/");
  }

  console.log("from <postdetails> the currpost st.posts[postId] is...", currPost);

  let postDetails;
  if (currPost) {
    postDetails = (
      <div>
        <Card className="text-left" >
          <CardHeader className="text-left">{currPost.title}</CardHeader>
          <CardBody>
            <CardTitle className="text-left">{currPost.description}</CardTitle>
            <CardText className="text-left">{currPost.body}</CardText>
            <Badge onClick={toggleEdit} color="primary">Edit</Badge>
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
          // setIsEditing={setIsEditing}
          toggleEdit={toggleEdit}
          currPost={currPost}
          id={postId} /> :
        postDetails
      }
    </div>

  )
}

export default PostDetails;