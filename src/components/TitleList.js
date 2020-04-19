import React, { useEffect } from 'react';
import BlogPostCard from './BlogPostCard';
import { useDispatch, useSelector } from 'react-redux';
import { getTitlesFromApi } from './actions';

function TitleList() {
  // const posts = useSelector(st => st.posts);
  // const postIds = Object.keys(posts);
  const titles = useSelector(st => st.titles);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getTitles() {
      try {
        dispatch(getTitlesFromApi());
      }
      catch (err) {
        console.log(err);
      }
    }
    getTitles();
  }, [dispatch]
  );


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



