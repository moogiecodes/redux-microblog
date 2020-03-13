import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

function BlogPostCard({ title, description, postId }) {
 
  return (
    <div>
      <Card body outline color="secondary" className='ml-5 mr-5'>
        <Link to={`/${postId}`} >
          <CardTitle>{title}</CardTitle>
        </Link >
        <CardText>{description}</CardText>
      </Card>
    </div>
  );
}

export default BlogPostCard;