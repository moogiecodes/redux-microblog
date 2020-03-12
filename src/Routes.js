import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import TitleList from './TitleList';
import PostForm from './PostForm';
import PostDetails from './PostDetails';
import { v4 as uuid } from 'uuid';

function Routes() {
  const [isEditing, setIsEditing] = useState(false);
  const [posts, setPosts] = useState([]);
  // const [comments, setComments] = useState([])

  const addPost = post => {
    let newPost = { ...post, id: uuid(), comments: [] };
    setPosts(posts => [...posts, newPost]);
  }

  // replaces old post with updated form data
  // reset posts with updated post
  const updatePost = (fData, id) => {
    const newPosts = posts.map(p => p.id === id ?
      { ...p, ...fData } : p);
    setPosts(newPosts);
    setIsEditing(!isEditing);
  }

  const deletePost = (id) => {
    const newPosts = posts.filter(post => post.id !== id);
    setPosts(newPosts);
  }

  const updateComments = (fData, postId) => {
    const newPosts = posts.map(p => p.id === postId ?
      { ...p, comments: [...p.comments, fData] } : p);
    setPosts(newPosts);
  }

  // const removeComment = (postId, id) => {
  //   const newPosts = posts.map(p => p.id === postId ? ()
  //     let oldComments = p.comments
  //     { ...p, comments: [...p.comments, fData] } : p);
  //   setPosts(newPosts);
  // }

  return (
    <Switch>
      <Route path="/" exact>
        <TitleList posts={posts} isEditing={isEditing} />
      </Route>
      <Route path="/new" exact>
        <PostForm isEditing={isEditing} addPost={addPost} />
      </Route>
      <Route path="/:postId" exact>
        <PostDetails
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          posts={posts}
          updatePost={updatePost}
          deletePost={deletePost}
          updateComments={updateComments} />
      </Route>
      <Redirect to="/" />
      {/* Make a 404 page ??? */}
    </Switch>
  )

}

export default Routes; 