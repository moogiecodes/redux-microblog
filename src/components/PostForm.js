import React, { useState } from 'react';
import { Col, FormGroup, Form, Label, Input, Container, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updatePostInAPI } from '../actions/actions';


function PostForm({ add, isEditing, toggleEdit, currPost, id }) {
  const dispatch = useDispatch();

  let INITIAL_STATE = {
    title: "",
    description: "",
    body: ""
  };

  /** Uses currPost data to fill in form when editing. */

  if (currPost) {
    INITIAL_STATE = {
      title: currPost.title,
      description: currPost.description,
      body: currPost.body
    };
  }
  const [form, setForm] = useState(INITIAL_STATE);

  /** Calls parent add() for dispatching new post to API */

  function handleSubmit(e) {
    e.preventDefault();
    console.log("HANDLE SUBMIT IN POSTFORM ");
    add(form);
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(data => ({
      ...data,
      [name]: value
    }));
  };

  /** Handle post editing: updates to backend. 
   * SAVE button (editing existing post)
  */

  function editPost() {
    dispatch(updatePostInAPI(
      id,
      form.title,
      form.description,
      form.body
    ));

    toggleEdit();
  }

  /** Form buttons for new post & editing existing post */

  let newFormButtons = (
    <span>
      <Button className="NewPostForm-button ml-2 mr-2 mt-5" onSubmit={handleSubmit}>Save</Button>
      <Link to="/">
        <Button className="Cancel-button ml-2 mr-2 mt-5">Cancel</Button>
      </Link>
    </span>
  );

  let editFormButtons = (
    <span>
      <button className="NewPostForm-button ml-1 mr-1 mt-5" onClick={editPost}>Save</button>
      <button className="Cancel-button ml-1 mr-1 mt-5" onClick={toggleEdit}>Cancel</button>
    </span>
  );

  return (
    <Container className="themed-container" fluid="sm">
      <FormGroup row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Form className='mx-auto' onSubmit={handleSubmit}>
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
            {isEditing ?
              editFormButtons
              :
              newFormButtons
            }
          </Form>
        </Col>
      </FormGroup>
    </Container>
  )
}

export default PostForm;