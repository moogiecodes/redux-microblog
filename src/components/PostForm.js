import React, { useState } from 'react';
import { Col, FormGroup, Form, Label, Input, Container, Button } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addPost, updatePost } from '../actions/actions';
import { sendPostToAPI } from '../actions/actions';


function PostForm({ isEditing, setIsEditing, currPost, id }) {
  const dispatch = useDispatch();
  const history = useHistory();

  let INITIAL_STATE = {
    title: "",
    description: "",
    body: ""
  };
  // NG - uses currPost data to fill in form when editing. 
  if (currPost) {
    INITIAL_STATE = {
      title: currPost.title,
      description: currPost.description,
      body: currPost.body
    };
  }

  const [form, setForm] = useState(INITIAL_STATE);

  //SAVE button (add new post)
  const newPost = e => {
    e.preventDefault();
    console.log("ADDED NEW POST...FORM IS..", form);
    dispatch(sendPostToAPI(form.title, form.description, form.body));
    history.push('/');
  }

  //SAVE button (edit existing post)
  const editPost = e => {
    // NG - added e.preventDefault
    e.preventDefault();
    // NG - props was declared as postId in PostForm but id was expected in from PostDetails.
    dispatch(updatePost(form, id));

    setIsEditing(!isEditing);
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(data => ({
      ...data,
      [name]: value
    }));
  };

  let newFormButtons = (
    <span>
      <Button className="NewPostForm-button ml-2 mr-2 mt-5" onClick={newPost}>Save</Button>
      <Link to="/">
        <Button className="Cancel-button ml-2 mr-2 mt-5">Cancel</Button>
      </Link>
    </span>
  );

  let editFormButtons = (
    <span>
      <button className="NewPostForm-button ml-1 mr-1 mt-5" onClick={editPost}>Save</button>
      <button className="Cancel-button ml-1 mr-1 mt-5" onClick={() => setIsEditing(!isEditing)}>Cancel</button>
    </span>
  );
  return (
    <Container className="themed-container" fluid="sm">
      <FormGroup row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Form className='mx-auto'>
            <Label htmlFor="title" className='float-left'>Title: </Label>
            <Input
              id="title"
              name="title"
              value={form.title}
              onChange={handleChange}
              bsSize='sm'
            />
            <Label htmlFor="description" className='float-left'>Description: </Label>
            <Input
              id="description"
              name="description"
              value={form.description}
              onChange={handleChange}
              bsSize='sm'
            />
            <Label htmlFor="body" className='float-left'>Body: </Label>
            <Input
              type="textarea"
              id="body"
              name="body"
              value={form.body}
              onChange={handleChange}
              bsSize='sm'
            />
            {isEditing ? editFormButtons : newFormButtons}
          </Form>
        </Col>
      </FormGroup>
    </Container>
  )
}

export default PostForm;