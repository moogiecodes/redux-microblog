import React, { useState } from 'react';
import { Form, Input, Button } from 'reactstrap';

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

    <Form>
      <Input name="comment-form" id="comment-form" placeholder="New Comment" />
      <Button onSubmit={handleSubmit}>Add</Button>
    </Form>
  );
}

export default CommentForm;