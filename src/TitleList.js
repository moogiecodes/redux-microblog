import React from 'react';
import BlogPostCard from './BlogPostCard';

function TitleList({ posts, isEditing }) {

  //map posts, render <BlogPostCard /> for each post 
  const postList = (posts.map(p => <BlogPostCard
    key={p.id}
    postId={p.id}
    title={p.title}
    description={p.description}
    isEditing={isEditing} />))

  return (
    <div>
      {postList}
    </div>
  );
}

export default TitleList;