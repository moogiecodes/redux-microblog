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

  const removeComment = (postId, id) => {
    console.log("Success! got back to Routes!", postId, id)
    const foundPost = posts.find(p => p.id === postId)
    const oldComments = [...foundPost.comments];
    const updatedComments = oldComments.filter(c => c.id !== id);
    const newPosts = posts.map(p => p.id === postId ?
      {...p, comments: [...updatedComments]} : p);
    setPosts(newPosts);
  }
  return (
    <Switch>
      <Route exact path="/" >
        <TitleList posts={posts} isEditing={isEditing} />
      </Route>
      <Route exact path="/new" >
        <PostForm isEditing={isEditing} addPost={addPost} />
      </Route>
      <Route exact path="/:postId" >
        <PostDetails
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          posts={posts}
          updatePost={updatePost}
          deletePost={deletePost}
          updateComments={updateComments} 
          removeComment={removeComment}/>
      </Route>
      <Redirect to="/" />
      {/* Make a 404 page ??? */}
    </Switch>
  )

}

export default Routes; 