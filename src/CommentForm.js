import React, { useState } from 'react';
import { Container, Col, FormGroup, Form, Input, Button } from 'reactstrap';

function CommentForm({ updateComments }) {
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
  /** NG - BUG FIXES
   * `text` must be a keyword - changed to `comment` for value
   *  was wrong about `text` name should be `text`. had comment-form as name. didn't
   *  match key `text`...
   *  changed `onSubmit` to `onClick` to fix bug - was crashing/reloading app
   *  need to remove console.logs and function calls upstream...
   *  TODO - Redirect to '/' causes app to reload and lose all state???
   */
  return (
    <Container className="themed-container " fluid="sm">
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