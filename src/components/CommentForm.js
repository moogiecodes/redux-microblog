import React, { useState } from 'react';
import { Container, Col, FormGroup, Form, Input, Button } from 'reactstrap';

function CommentForm({ updateComments }) {
  const cmtFormContainer = {
    margin: '8% auto'
  }

  const INITIAL_STATE = {
    text: ""
  }
  const [form, setForm] = useState(INITIAL_STATE)

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(form => ({
      ...form,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    updateComments(form);
    setForm(INITIAL_STATE);
  }

  return (
    <Container className="themed-container " fluid="sm" style={cmtFormContainer}>
      <FormGroup row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Form className='mx-auto'>
            <Input
              name="text"
              id="text"
              value={form.text}
              placeholder="New Comment"
              onChange={handleChange} />
            <Button className='ml-1 mr-1 mt-4' onClick={handleSubmit}>Add</Button>
          </Form>
        </Col>
      </FormGroup>
    </Container>
  );
}

export default CommentForm;