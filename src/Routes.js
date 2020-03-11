import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import TitleList from './TitleList';
import PostForm from './PostForm';
import PostDetails from './PostDetails';
import { v4 as uuid } from 'uuid';

function Routes() {
  const [isEditing, setIsEditing] = useState(false);
  const [posts, setPosts] = useState([]);

  const addPost = post => {
    let newPost = { ...post, id: uuid() };
    setPosts(posts => [...posts, newPost]);
    console.log(posts);
  }
  // methods needs to find the post by the id and update the properties 
  // from form data. 
  const updatePost = (id, post) => {
    let updatedPost = { ...post};
    for(let p of posts) {
      if (p.id === id) {
        let currentPost = p;
        currentPost.title = post.title;
        currentPost.description = post.description;
        currentPost.body = post.body;
      }
    }
    setPosts(posts => [...posts, newPost]);
    console.log(posts);
  }
 
  const deletePost = (id) => {
   const newPosts = posts.filter(post => post.id !== id);
   setPosts(newPosts);
  }

  return (
    <Switch>
      <Route path="/" exact>
        <TitleList posts={posts} />
      </Route>
      <Route path="/new" exact>
        <PostForm isEditing={isEditing} addPost={addPost} />
      </Route>
      <Route path="/:postId" exact>
        <PostDetails isEditing={isEditing} setIsEditing={setIsEditing}/>
      </Route>
      <Redirect to="/" />
      {/* Make a 404 page ??? */}
    </Switch>
  )

}

export default Routes; 