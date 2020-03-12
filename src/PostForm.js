import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Col, FormGroup, Form, Label, Input, Container, Button } from 'reactstrap';

function PostForm({ addPost, isEditing, updatePost, deletePost, id }) {
  const history = useHistory();

  const INITIAL_STATE = {
    title: "",
    description: "",
    body: ""
  };
  const [form, setForm] = useState(INITIAL_STATE);

  const saveNew = e => {
    e.preventDefault();
    addPost(form);
    history.push('/');
  };

  const saveEdit = e => {
    e.preventDefault();
    updatePost(form, id);
    history.push('/');
  };

  const deleteButton = e => {
    e.preventDefault();
    deletePost(id);
    history.push('/');
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(form => ({
      ...form,
      [name]: value
    }));
  };

  let newFormButtons = (
    <span>
      <Button className="NewPostForm-button ml-2 mr-2 mt-5" onClick={saveNew}>Save</Button>
      <Link to="/">
        <Button className="Cancel-button ml-2 mr-2 mt-5">Cancel</Button>
      </Link>
    </span>
  );

  let editFormButtons = (
    <span>
      <button className="NewPostForm-button ml-1 mr-1 mt-5" onClick={saveEdit}>Save</button>
      <button className="Cancel-button ml-1 mr-1 mt-5" onClick={deleteButton}>Delete</button>
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