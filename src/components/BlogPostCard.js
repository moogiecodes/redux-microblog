import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

function BlogPostCard({ title, description, postId }) {
  const postCard = {
    maxWidth: '200px',
    minWidth: '200px',
    minHeight: '200px',
    maxHeight: '200px',
    margin: '5px 2px',
    border: '1px solid',
    borderColor: '#7FDBFF',
    overflow: 'hidden',
    texOverflow: 'ellipsis',
    textAlign: 'left'
  };

  return (
    <Card body outline color="secondary" className='ml-5 mr-5' style={postCard}>
      <Link to={`/${postId}`} >
        <CardTitle>{title}</CardTitle>
      </Link >
      <CardText>{description}</CardText>
    </Card>
  );
}

export default BlogPostCard;