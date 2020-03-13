import React from 'react';
import BlogPostCard from './BlogPostCard';
import { useSelector } from 'react-redux';

function TitleList() {
  const posts = useSelector(st => st.posts);
  const postIds = Object.keys(posts);
  
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



