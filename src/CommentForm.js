import React, { useState } from 'react';
import { Container, Col, FormGroup, Form, Input, Button } from 'reactstrap';

function CommentForm({ addComment }) {
  const INITIAL_STATE = {
    text: ""
  }
  const [form, setForm] = useState(INITIAL_STATE);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(form => ({
      ...form,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    addComment(form);
  }

  return (
    <Container className="themed-container " fluid="sm">
      <FormGroup row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Form className='mx-auto'>
            <Input name="comment-form" id="comment-form" placeholder="New Comment" onChange={handleChange} />
            <Button className='ml-1 mr-1 mt-4' onSubmit={handleSubmit}>Add</Button>
          </Form>
        </Col>
      </FormGroup>
    </Container>
  );
}

export default CommentForm;