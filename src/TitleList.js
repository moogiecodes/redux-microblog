import React from 'react';
import BlogPostCard from './BlogPostCard';
import { useSelector } from 'react-redux';

function TitleList() {
  const posts = useSelector(st => st.posts);

  console.log("POSTS ....", posts);

  const postIds = Object.keys(posts);
  console.log("POST IDS ....", postIds);
  //map posts, render <BlogPostCard /> for each post 
  const postList = (postIds.map(pId => <BlogPostCard
    key={pId}
    postId={pId}
    title={posts[pId].title}
    description={posts[pId].description}
  />))

  return (
    <div>
      {postList}
    </div>
  );
}

export default TitleList;



