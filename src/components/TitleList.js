import React, { useState, useEffect } from 'react';
import BlogPostCard from './BlogPostCard';
import { useDispatch, useSelector } from 'react-redux';
import { getTitlesFromApi } from '../actions/actions';

function TitleList() {
  // const posts = useSelector(st => st.posts);
  // const postIds = Object.keys(posts);
  const titles = useSelector(st => st.titles);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    async function getTitles() {
      dispatch(getTitlesFromApi()).then(() => setIsLoading(false));
    }
    if (isLoading) {
      getTitles();
    }
  }, [dispatch, isLoading]);

  if (isLoading) return <b>Loading...</b>;

  const titleList = (titles.map(t => <BlogPostCard
    key={t.id}
    postId={t.id}
    title={t.title}
    description={t.description}
  />))

  return (
    <div>
      {titleList}
    </div>
  );
}

export default TitleList;



